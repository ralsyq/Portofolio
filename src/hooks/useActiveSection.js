import { useEffect, useState } from 'react';

export function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const checkScroll = () => {
      const scrollPosition = window.scrollY;
      const heroThreshold = window.innerHeight * 0.35;

      if (scrollPosition < heroThreshold) {
        setActive(null);
        return;
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        const scrollPosition = window.scrollY;
        const heroThreshold = window.innerHeight * 0.35;

        if (scrollPosition < heroThreshold) {
          setActive(null);
          return;
        }

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-20% 0px -35% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', checkScroll);
      observer.disconnect();
    };
  }, [ids]);

  return active;
}

