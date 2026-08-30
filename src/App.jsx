import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DepthField } from '@/components/motion/DepthField';
import { Hero } from '@/components/sections/Hero';
import { Work } from '@/components/sections/Work';
import { Blog } from '@/components/sections/Blog';
import { ShotCutArticle } from '@/components/articles/ShotCutArticle';
import { UrbiqueArticle } from '@/components/articles/UrbiqueArticle';
import { StroomArticle } from '@/components/articles/StroomArticle';
import { KakyuhArticle } from '@/components/articles/KakyuhArticle';
import { BoxBoxArticle } from '@/components/articles/BoxBoxArticle';
import { PklArticle } from '@/components/articles/PklArticle';
import { InspoWallArticle } from '@/components/articles/InspoWallArticle';
import { OlistArticle } from '@/components/articles/OlistArticle';

export default function App() {
  const [activeArticle, setActiveArticle] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#stroom' || hash === '#article/stroom') return 'stroom';
    if (hash === '#shotcut' || hash === '#article/shotcut') return 'shotcut';
    if (hash === '#urbique' || hash === '#article/urbique' || hash === '#fastwear' || hash === '#article/fastwear') return 'urbique';
    if (hash === '#kakyuh' || hash === '#article/kakyuh') return 'kakyuh';
    if (hash === '#boxbox' || hash === '#article/boxbox') return 'boxbox';
    if (hash === '#pkl-sejahtera' || hash === '#article/pkl-sejahtera' || hash === '#pkl' || hash === '#article/pkl') return 'pkl-sejahtera';
    if (hash === '#inspowall' || hash === '#article/inspowall') return 'inspowall';
    if (hash === '#olist' || hash === '#article/olist') return 'olist';
    return null;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#stroom' || hash === '#article/stroom') {
        setActiveArticle('stroom');
      } else if (hash === '#shotcut' || hash === '#article/shotcut') {
        setActiveArticle('shotcut');
      } else if (hash === '#urbique' || hash === '#article/urbique' || hash === '#fastwear' || hash === '#article/fastwear') {
        setActiveArticle('urbique');
      } else if (hash === '#kakyuh' || hash === '#article/kakyuh') {
        setActiveArticle('kakyuh');
      } else if (hash === '#boxbox' || hash === '#article/boxbox') {
        setActiveArticle('boxbox');
      } else if (hash === '#pkl-sejahtera' || hash === '#article/pkl-sejahtera' || hash === '#pkl' || hash === '#article/pkl') {
        setActiveArticle('pkl-sejahtera');
      } else if (hash === '#inspowall' || hash === '#article/inspowall') {
        setActiveArticle('inspowall');
      } else if (hash === '#olist' || hash === '#article/olist') {
        setActiveArticle('olist');
      } else if (!hash.startsWith('#article')) {
        setActiveArticle(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openArticle = (slug) => {
    setActiveArticle(slug);
    window.location.hash = `#article/${slug}`;
  };

  const closeArticle = () => {
    setActiveArticle(null);
    window.location.hash = '#work';
  };

  if (activeArticle === 'stroom') {
    return (
      <div className="min-h-screen">
        <div className="noise" aria-hidden="true" />
        <StroomArticle onBack={closeArticle} />
      </div>
    );
  }

  if (activeArticle === 'shotcut') {
    return (
      <div className="min-h-screen">
        <div className="noise" aria-hidden="true" />
        <ShotCutArticle onBack={closeArticle} />
      </div>
    );
  }

  if (activeArticle === 'urbique' || activeArticle === 'fastwear') {
    return (
      <div className="min-h-screen">
        <div className="noise" aria-hidden="true" />
        <UrbiqueArticle onBack={closeArticle} />
      </div>
    );
  }

  if (activeArticle === 'kakyuh') {
    return (
      <div className="min-h-screen">
        <div className="noise" aria-hidden="true" />
        <KakyuhArticle onBack={closeArticle} />
      </div>
    );
  }

  if (activeArticle === 'boxbox') {
    return (
      <div className="min-h-screen">
        <div className="noise" aria-hidden="true" />
        <BoxBoxArticle onBack={closeArticle} />
      </div>
    );
  }

  if (activeArticle === 'pkl-sejahtera' || activeArticle === 'pkl') {
    return (
      <div className="min-h-screen">
        <div className="noise" aria-hidden="true" />
        <PklArticle onBack={closeArticle} />
      </div>
    );
  }

  if (activeArticle === 'inspowall') {
    return (
      <div className="min-h-screen">
        <div className="noise" aria-hidden="true" />
        <InspoWallArticle onBack={closeArticle} />
      </div>
    );
  }

  if (activeArticle === 'olist') {
    return (
      <div className="min-h-screen">
        <div className="noise" aria-hidden="true" />
        <OlistArticle onBack={closeArticle} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="noise" aria-hidden="true" />
      <DepthField />
      <Navbar />

      <main className="relative">
        <Hero />
        <Work onOpenArticle={openArticle} />
        <Blog />
      </main>

      <Footer />
    </div>
  );
}
