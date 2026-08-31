import { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MockupPlaceholder } from '@/components/ui/MockupPlaceholder';
import { useClickSound } from '@/hooks/useClickSound';

import boxboxMockup from '@/assets/project-image/portfolio/boxbox.png';
import './ShotCutArticle.css';

export function BoxBoxArticle({ onBack }) {
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
            className="inline-flex items-center gap-2 rounded-full border border-dotted border-border bg-background px-4 py-1.5 text-xs font-sans text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background cursor-pointer"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-foreground font-sans sm:inline-flex items-center gap-1.5">
              <Clock className="size-3" /> 4 min read
            </span>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: 'BoxBox UI/UX Design Case Study', url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="rounded-full border border-dotted border-border p-2 text-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer"
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
            <span className="rounded-full border border-dotted border-border bg-background px-3.5 py-1.5 text-xs font-sans text-foreground uppercase tracking-wider">
              UI/UX Product Design Case Study
            </span>
          </div>

          <h1 className="shotcut-title text-6xl sm:text-8xl text-foreground font-normal tracking-tight leading-none mb-8 pt-4">
            BoxBox
          </h1>

          <p className="text-xl sm:text-2xl text-foreground font-sans font-light leading-relaxed mb-8">
            UI/UX Design for a Self-Storage Space Booking Application: Balancing Simplicity and Functionality in a 24-Hour Design Challenge.
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
              <span>4 min read</span>
            </div>
          </div>
        </header>

        {/* Hero Mockup */}
        <div className="my-8">
          <MockupPlaceholder
            src={boxboxMockup}
            alt="BoxBox Storage App UI/UX Design Showcase"
            title="BoxBox: Self-Storage App UI/UX Showcase"
            badge="Design Overview"
            aspectRatio="aspect-[16/10]"
            caption="BoxBox: Comprehensive 24-hour design sprint covering task flows, user journeys, paper wireframes, and Figma prototypes."
          />
        </div>

        {/* Article Body Content */}
        <div className="shotcut-content space-y-12 font-sans text-[17px] leading-relaxed text-foreground">

          {/* Section 1: The Context */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              1. The 24-Hour Final Exam Challenge
            </h2>
            <p>
              This project was part of my final assignment during the second semester of my UI/UX course at Binus University. The case study requirements were released with a strict 24-hour completion window.
            </p>
            <p>
              Rather than feeling constrained by the tight deadline, I embraced it as an opportunity to pressure-test my design methodology, prioritization frameworks, and rapid Figma prototyping skills.
            </p>
          </section>

          {/* Section 2: Design Process */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              2. User Journey & Task Flow Architecture
            </h2>
            <p>
              I began by deconstructing the core storage rental workflow into four intuitive touchpoints:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-foreground/90">
              <li><strong>Needs Assessment & Unit Selection:</strong> Selecting standard storage sizes (XL, L, S) with instant price estimation.</li>
              <li><strong>Location & Time Booking:</strong> Choosing drop-off / pickup dates and locker locations.</li>
              <li><strong>Frictionless Checkout:</strong> Clear payment breakdown (Total: Rp 30.000) and instant method selection.</li>
              <li><strong>Inventory Management:</strong> Tracking active storage lockers and access codes right from the home tab.</li>
            </ol>
            <p className="mt-3">
              Before touching Figma, I sketched low-fidelity wireframes on paper to iterate rapidly on visual hierarchy and button placements.
            </p>
          </section>

          {/* Section 3: Visual Design & Clarity */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              3. Calm Aesthetics & Functional Clarity
            </h2>
            <p>
              For users storing precious personal items, building trust through design is critical. I selected a calm, minimal blue-and-neutral color palette, clean typography, and spacious card layouts to ensure every screen felt straightforward, trustworthy, and uncluttered.
            </p>
          </section>

          {/* Section 4: What I Learned */}
          <div className="big-lesson-card relative overflow-hidden rounded-3xl p-8 my-10">
            <span className="big-lesson-tag text-xs uppercase tracking-widest font-sans">
              Key Design Insight
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white font-sans sm:text-3xl">
              Balancing Simplicity with Functionality
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/90 font-sans">
              "Designing a complete interface in 24 hours pushed me to make quick yet thoughtful design decisions. It honed my ability to prioritize essential user needs over decorative complexity. The experience proved that great UX under pressure comes from relentless focus on core user journeys."
            </p>
          </div>

          {/* Contact / Discussion Footer Card */}
          <div className="rounded-3xl border border-dashed border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-base font-bold text-foreground font-sans">Interested in BoxBox?</h4>
              <p className="text-xs text-foreground/80 font-sans mt-0.5">Let's connect and discuss user journeys, rapid prototyping & UI systems.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/raisya-putri-agustin/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-dotted border-border bg-background p-2.5 text-foreground hover:bg-foreground hover:text-background transition-colors"
                title="Connect on LinkedIn"
              >
                <FaLinkedin className="size-4" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-dotted border-border bg-background p-2.5 text-foreground hover:bg-foreground hover:text-background transition-colors"
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
