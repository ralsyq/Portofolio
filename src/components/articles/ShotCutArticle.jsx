import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MockupPlaceholder } from '@/components/ui/MockupPlaceholder';
import { useClickSound } from '@/hooks/useClickSound';

import heroMockup from '@/assets/project-image/shotcut/mockup.png';
import researchImg from '@/assets/project-image/shotcut/research.jpeg';
import respondImg from '@/assets/project-image/shotcut/respond.jpeg';
import conceptTestingImg from '@/assets/project-image/shotcut/concept-testing.jpeg';
import improve1Img from '@/assets/project-image/shotcut/improve1.jpeg';
import improve2Img from '@/assets/project-image/shotcut/improve2.jpeg';
import learningProcessImg from '@/assets/project-image/shotcut/learning-process.jpeg';

import './ShotCutArticle.css';

function TypewriterQuote({ text, speed = 35, delay = 200 }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayedText('');

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return (
    <span className="inline text-white">
      {displayedText}
      <span className="big-lesson-cursor inline-block w-[3px] h-[1em] ml-1 align-middle animate-pulse" />
    </span>
  );
}

export function ShotCutArticle({ onBack }) {
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
              <Clock className="size-3" /> 6 min read
            </span>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: 'ShotCut Case Study', url: window.location.href });
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
              iOS Product Design Case Study
            </span>
          </div>

          <h1 className="shotcut-title text-6xl sm:text-8xl text-foreground font-normal tracking-tight leading-none mb-8 pt-4">
            ShotCut
          </h1>

          <p className="text-xl sm:text-2xl text-foreground font-sans font-light leading-relaxed mb-8">
            Improving the efficiency of making shot-list references for cinematographers through automated video frame extraction.
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
                <Calendar className="size-3" /> March 2026
              </div>
              <span>6 min read</span>
            </div>
          </div>
        </header>

        {/* Hero Mockup */}
        <MockupPlaceholder
          src={heroMockup}
          alt="ShotCut iOS App Main Interface Showcase"
          title="ShotCut iOS App — Main Interface Showcase"
          badge="Hero Mockup"
          aspectRatio="aspect-[16/9]"
          caption="ShotCut iOS App — Automated video frame detection & reference shot grid interface."
        />

        {/* Article Body Content */}
        <div className="shotcut-content space-y-12 font-sans text-[17px] leading-relaxed text-foreground">

          {/* Section 1: Identify Opportunity & Pivot */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              1. Identifying the Opportunity & The Pivot
            </h2>
            <p>
              In cinematic storytelling, creating a compelling visual language requires hours of studying existing films, gathering lighting references, and building comprehensive shot-lists. We initially began our discovery phase with a broad mission:
            </p>

            <div className="my-6 rounded-3xl border border-dashed border-border bg-card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans uppercase tracking-widest text-foreground font-bold">
                  01. Initial Statement
                </span>
              </div>
              <p className="text-lg font-medium italic text-foreground">
                “Improve production experience for cinematographers”
              </p>

              <div className="flex justify-center text-foreground py-1">
                <span className="text-xs font-sans font-bold">↓ Pivoting after research</span>
              </div>

              <div className="flex items-center justify-between border-t border-dashed border-border pt-4">
                <span className="text-xs font-sans uppercase tracking-widest text-foreground font-bold">
                  02. Validated Pivot Statement
                </span>
              </div>
              <p className="text-xl font-bold text-foreground">
                “Improve efficiency of making shot-list references for cinematographers”
              </p>
            </div>

            <h3 className="text-xl font-bold text-foreground pt-2">Why the Pivot?</h3>
            <p>
              After broadening our exploratory research across the three key filmmaking phases—<strong>Pre-production</strong>, <strong>Production</strong>, and <strong>Post-production</strong>—we made a crucial discovery: the most exhausting friction did not occur on set with cameras rolling, but rather <em>before production</em> during manual reference scouting and frame curation.
            </p>
          </section>

          {/* Section 2: Research & Participants */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              2. Gathering Data & Research Methodology
            </h2>
            <p>
              To ground our assumptions in empirical insight, we engaged with a diverse cross-section of industry practitioners and enthusiasts through structured user interviews and observational workflow mapping:
            </p>

            {/* Participants Grid with natural persona kaomojis */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 my-6">
              {[
                { name: 'Tape', role: 'Producer', kaomoji: '( ˘͈ ᵕ ˘͈ )' },
                { name: 'Uta', role: 'Cinephile', kaomoji: '( ˶ˆᗜˆ˵ )' },
                { name: 'Clive', role: 'Videographer', kaomoji: '(⌐■_■)' },
                { name: 'Abe', role: 'Photographer', kaomoji: '( ⊙_⊙ )' },
                { name: 'Irfa', role: 'Director', kaomoji: '( •̀_•́ )' },
                { name: 'Shanon', role: 'Editor', kaomoji: '( ✂_✂ )' },
              ].map((p) => (
                <div
                  key={p.name}
                  className="flex flex-col justify-between rounded-3xl border border-dashed border-border bg-card p-4 transition-colors hover:border-foreground"
                >
                  <span className="font-sans text-sm text-foreground font-bold">{p.kaomoji}</span>
                  <div className="mt-3">
                    <h4 className="text-base font-bold text-foreground font-sans">{p.name}</h4>
                    <p className="text-xs font-sans text-foreground/80">{p.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <p>
              We synthesized raw interview transcripts, behavioral patterns, and workflow pain points using physical whiteboards and collaborative Miro sticky boards to identify shared bottlenecks.
            </p>

            <MockupPlaceholder
              src={researchImg}
              alt="Research Synthesis & Miro Affinity Diagramming"
              title="Research Synthesis & Miro Affinity Diagramming"
              badge="Research Artifact"
              aspectRatio="aspect-[16/9]"
              caption="Affinity mapping user interviews to pinpoint workflow friction in shot-list preparation."
            />
          </section>

          {/* Section 3: User Persona */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              3. User Persona & Problem Definition
            </h2>

            <div className="rounded-3xl border border-dashed border-border bg-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-dotted border-border bg-background font-sans text-lg font-bold text-foreground">
                  ( ˙ᴗ˙ )
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground font-sans">Rizki</h3>
                  <p className="text-xs text-foreground font-sans">Primary Persona — The Cinematographer / Solo Creator</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                <div className="rounded-2xl border border-dashed border-border bg-background p-5">
                  <div className="flex items-center gap-2 text-xs font-sans uppercase font-bold text-foreground mb-2.5">
                    Pain Points
                  </div>
                  <ul className="space-y-2 text-xs text-foreground leading-relaxed list-disc pl-4 font-sans">
                    <li>Manual reference searching consumes hours of tedious, non-creative time.</li>
                    <li>Scrubbing through hours of video footage frame-by-frame is exhausting.</li>
                    <li>Taking manual screenshots disrupts creative visual flow and clutters folders.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-dashed border-border bg-background p-5">
                  <div className="flex items-center gap-2 text-xs font-sans uppercase font-bold text-foreground mb-2.5">
                    Needs & Goals
                  </div>
                  <ul className="space-y-2 text-xs text-foreground leading-relaxed list-disc pl-4 font-sans">
                    <li>Quickly find exact shot references and visual framing for his shot-lists.</li>
                    <li>Automate the logistical hassle of extracting and organizing still frames.</li>
                    <li>Focus purely on creative visual storytelling and moodboard planning.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Proposed Solution & Frameworks */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              4. Proposed Solution & Apple Frameworks
            </h2>
            <p>
              We conceptualized <strong>ShotCut</strong>: an intuitive native iOS application that allows creators to upload any reference video and automatically breaks it down into a cleanly categorized grid of distinct shot frames for rapid selection and high-resolution export.
            </p>

            <div className="my-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-dashed border-border bg-card p-6">
                <span className="text-xs font-sans uppercase tracking-widest text-foreground font-bold">
                  Apple Vision Framework
                </span>
                <h4 className="text-lg font-bold text-foreground font-sans mt-2">Frame Change Detection</h4>
                <p className="mt-2 text-xs text-foreground leading-relaxed">
                  Utilized for optical scene boundary analysis and visual difference calculation, automatically recognizing significant camera angle changes.
                </p>
              </div>

              <div className="rounded-3xl border border-dashed border-border bg-card p-6">
                <span className="text-xs font-sans uppercase tracking-widest text-foreground font-bold">
                  AVFoundation Pipeline
                </span>
                <h4 className="text-lg font-bold text-foreground font-sans mt-2">Image Processing</h4>
                <p className="mt-2 text-xs text-foreground leading-relaxed">
                  Powers high-performance video asset decoding, timestamp indexing, and lossless image frame extraction directly on-device.
                </p>
              </div>
            </div>

            <MockupPlaceholder
              src={respondImg}
              alt="ShotCut Architecture & Solution Storyboard"
              title="ShotCut Architecture & Solution Storyboard"
              badge="System Architecture"
              aspectRatio="aspect-[16/9]"
              caption="End-to-end user journey: Video Import → Vision Processing → Categorized Reference Grid → Export."
            />
          </section>

          {/* Section 5: Concept Testing & The 10-Second Race */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              5. Concept Testing: The 10-Second Challenge
            </h2>
            <p>
              To stress-test our prototype against real-world user behavior, we conducted a live challenge test with cinematographers finding all wide shots in a 2-minute video:
            </p>

            <MockupPlaceholder
              src={conceptTestingImg}
              alt="Concept Testing & Benchmark Results"
              title="Concept Testing: The 10-Second Challenge"
              badge="Live User Testing"
              aspectRatio="aspect-[16/9]"
              caption="Live benchmark testing: Manual YouTube video scrubbing vs. ShotCut prototype (completed in 10s)."
            />
          </section>

          {/* Section 6: Before vs After Concept Testing */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              6. Before vs. After Concept Testing
            </h2>
            <p>
              User testing revealed critical nuances in how cinematographers evaluate shot pacing. We iterated on two core product dimensions:
            </p>

            <div className="space-y-6">
              <MockupPlaceholder
                src={improve1Img}
                alt="Improvement 01: Custom Extraction Control"
                title="Improvement 01 — Custom Extraction Control"
                badge="Before vs After"
                aspectRatio="aspect-[16/9]"
                caption="Before: Fixed threshold algorithm. After: Interactive Sensitivity Slider for model threshold tuning."
              />

              <MockupPlaceholder
                src={improve2Img}
                alt="Improvement 02: Asset Management & Workflow"
                title="Improvement 02 — Asset Management & Workflow"
                badge="Before vs After"
                aspectRatio="aspect-[16/9]"
                caption="Before: Static frame list. After: 3s before/after frame trimming with exact timestamps and multi-select batch actions."
              />
            </div>
          </section>

          {/* Section 7: Key Learnings & Retrospective */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              7. Learning Process & Retrospective
            </h2>

            <MockupPlaceholder
              src={learningProcessImg}
              alt="Learning Process: Misfocus, The Aha! Moment, & Starting Over"
              title="Learning Process & Workflow Exploration"
              badge="Process & Retrospective"
              aspectRatio="aspect-[16/9]"
              caption="Misfocus → The Aha! Moment → Starting Over: Charting the full filmmaking workflow."
            />

            {/* Standalone Big Lesson with Typewriter Animation */}
            <div className="big-lesson-card my-8 rounded-3xl p-6 sm:p-8 space-y-3 shadow-md">
              <div className="flex items-center gap-2">
                <span className="big-lesson-tag text-xs font-sans uppercase tracking-widest font-bold">
                  Big Lesson
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold leading-relaxed font-sans text-white">
                “<TypewriterQuote text="Jumping to conclusions without staying open-minded = instant misalignment." />”
              </h3>
            </div>

            <div className="rounded-3xl border border-dashed border-border bg-card p-6 sm:p-8 space-y-3">
              <h3 className="text-lg font-bold text-foreground font-sans">If We Started Over:</h3>
              <ul className="space-y-2 text-sm text-foreground list-disc pl-5 font-sans">
                <li>Zoom out and map out every possible direction before locking into anything.</li>
                <li>Conduct more comprehensive observational interviews to examine all potential perspectives rather than our presumptions about the issue.</li>
              </ul>
            </div>
          </section>

          {/* Article Footer & Tags */}
          <footer className="pt-8 border-t border-dashed border-border space-y-6">
            <div className="flex flex-wrap gap-2">
              {['iOS Development', 'SwiftUI', 'Apple Vision', 'AVFoundation', 'Product Design', 'UI/UX', 'Apple Developer Academy'].map((tag) => (
                <span key={tag} className="rounded-full border border-dotted border-border bg-background px-3 py-1 text-xs font-sans text-foreground">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="rounded-3xl border border-dashed border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="text-base font-bold text-foreground font-sans">Interested in discussing ShotCut?</h4>
                <p className="text-xs text-foreground/80 font-sans mt-0.5">Let's connect and talk about product design & iOS engineering.</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/raisya-putri-agustin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-dotted border-border bg-background p-2.5 text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  <FaLinkedin className="size-4" />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-dotted border-border bg-background p-2.5 text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  <FaInstagram className="size-4" />
                </a>
                <button
                  onClick={handleBack}
                  className="rounded-full border border-foreground bg-foreground px-4 py-2 text-xs font-sans text-background hover:bg-foreground/90 transition-colors cursor-pointer whitespace-nowrap"
                >
                  ← Back to Portfolio
                </button>
              </div>
            </div>
          </footer>

        </div>
      </main>
    </article>
  );
}
