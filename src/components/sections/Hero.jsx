import { profile } from '@/data/profile';
import { useClickSound } from '@/hooks/useClickSound';
import { scrollToSection } from '@/lib/utils';
import './Hero.css';

export function Hero() {
  const playClick = useClickSound();
  const today = new Date();
  const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

  return (
    <section id="hero" className="hero-panel w-full">
      <span className="ghost-word" aria-hidden>
        Raisya
      </span>
      <div className="ghost-ring" aria-hidden />

      <h1 className="hero-heading">All I know is my interest has never warned.</h1>

      <div className="hero-actions">
        <button
          className="hero-pill hero-pill--solid"
          onClick={() => {
            playClick();
            scrollToSection('work');
          }}
        >
          View my work
        </button>
        <button
          className="hero-pill"
          onClick={() => {
            playClick();
            scrollToSection('connect-footer');
          }}
        >
          Get in touch
        </button>
      </div>

      <span className="hero-meta hero-meta--date">{date}</span>
      <span className="hero-meta hero-meta--name">{profile.name}</span>
    </section>
  );
}
