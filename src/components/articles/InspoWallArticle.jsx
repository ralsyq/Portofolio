import { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MockupPlaceholder } from '@/components/ui/MockupPlaceholder';
import { useClickSound } from '@/hooks/useClickSound';

import inspowallMockup from '@/assets/project-image/portfolio/inspowall.png';
import './ShotCutArticle.css';

export function InspoWallArticle({ onBack }) {
  const playClick = useClickSound();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBack = () => {
    playClick();
    if (onBack) {
      onBack();
    }
  };

  return (
    <article className="shotcut-article-page min-h-screen bg-background text-foreground">
      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3.5 sm:px-6">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-4 py-1.5 text-xs font-sans text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background cursor-pointer"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-foreground font-sans sm:inline-flex items-center gap-1.5">
              <Clock className="size-3" /> 3 min read
            </span>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: 'InspoWall Web App Case Study', url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="rounded-full border border-border/80 p-2 text-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer"
              title="Share Case Study"
            >
              <Share2 className="size-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Article Meta Header */}
        <header className="mb-14">
          <div className="mb-8 flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-border/80 bg-background px-3.5 py-1.5 text-xs font-sans text-foreground uppercase tracking-wider">
              Front-End Web Development
            </span>
          </div>

          <h1 className="shotcut-title text-6xl sm:text-8xl text-foreground font-normal tracking-tight leading-none mb-8 pt-4">
            InspoWall
          </h1>

          <p className="text-xl sm:text-2xl text-foreground font-sans font-light leading-relaxed mb-8">
            A Quick Daily Motivational Website: Transforming Academic Burnout into an Uplifting Digital Routine with Vite & Vanilla JS.
          </p>

          {/* Author Badge */}
          <div className="flex items-center justify-between border-y border-dashed border-border py-4 my-8">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-full border border-border bg-foreground text-background font-bold text-sm font-sans">
                RP
              </div>
              <div>
                <h2 className="text-sm font-bold text-foreground font-sans">Raisya Putri Agustin</h2>
              </div>
            </div>

            <div className="text-right text-xs text-foreground font-sans">
              <div className="flex items-center gap-1 justify-end">
                <Calendar className="size-3" /> 2025
              </div>
              <span>3 min read</span>
            </div>
          </div>
        </header>

        {/* Hero Mockup */}
        <div className="my-8">
          <MockupPlaceholder
            src={inspowallMockup}
            alt="InspoWall Web App Interface Showcase"
            title="InspoWall: Daily Motivational Web Experience"
            badge="Web Application"
            aspectRatio="aspect-[16/10]"
            caption="InspoWall: Minimalist daily motivational web app providing uplifting quotes and positive morning routines."
          />
        </div>

        {/* Article Body Content */}
        <div className="shotcut-content space-y-12 font-sans text-[17px] leading-relaxed text-foreground">

          {/* Section 1: The Origin */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              1. Born from Personal Burnout
            </h2>
            <p>
              This project was born out of my own genuine need for motivation during a demanding semester. Feeling stuck in the repetitive cycle of academic pressure and endless assignments, I realized how much of an impact a small, positive prompt can have on someone's daily mindset.
            </p>
            <p>
              I decided to design and build InspoWall: a distraction-free, beautifully minimalist web app that delivers daily curated motivational quotes, affirmations, and mood boosts.
            </p>
          </section>

          {/* Section 2: Technical Approach */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              2. Lightweight Engineering with Vite & Vanilla JS
            </h2>
            <p>
              Rather than importing bloated frameworks for a lightweight utility, I used InspoWall as an opportunity to master modern front-end tooling:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/90">
              <li>
                <strong>Vite Build Tooling:</strong> Fast hot module replacement (HMR), instant local dev server, and optimized tree-shaken production bundles.
              </li>
              <li>
                <strong>Vanilla JavaScript DOM Architecture:</strong> Direct, zero-overhead DOM updates for instant quote transitions ("Hit me again", category switching, and reset flows).
              </li>
              <li>
                <strong>Tactile Minimalist UI:</strong> Clean beige typography cards, pleasant button micro-interactions, and responsive layout for mobile and desktop.
              </li>
            </ul>
          </section>

          {/* Section 3: Takeaways */}
          <div className="big-lesson-card relative overflow-hidden rounded-3xl p-8 my-10">
            <span className="big-lesson-tag text-xs uppercase tracking-widest font-sans">
              Developer Takeaway
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white font-sans sm:text-3xl">
              Simplicity & Emotional Resonance
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/90 font-sans">
              "InspoWall proved that code doesn't need to be complex to be meaningful. By focusing on emotional utility and lightning-fast web fundamentals, a small project can provide genuine delight and positive momentum."
            </p>
          </div>

          {/* Contact / Discussion Footer Card */}
          <div className="rounded-3xl border border-dashed border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-base font-bold text-foreground font-sans">Interested in InspoWall?</h4>
              <p className="text-xs text-foreground/80 font-sans mt-0.5">Let's connect and talk about modern web tools & front-end performance.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/raisya-putri-agustin/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border/80 bg-background p-2.5 text-foreground hover:bg-foreground hover:text-background transition-colors"
                title="Connect on LinkedIn"
              >
                <FaLinkedin className="size-4" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border/80 bg-background p-2.5 text-foreground hover:bg-foreground hover:text-background transition-colors"
                title="Instagram"
              >
                <FaInstagram className="size-4" />
              </a>
            </div>
          </div>

        </div>
      </main>
    </article>
  );
}
