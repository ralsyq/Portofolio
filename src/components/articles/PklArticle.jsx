import { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MockupPlaceholder } from '@/components/ui/MockupPlaceholder';
import { useClickSound } from '@/hooks/useClickSound';

import pklMockup from '@/assets/project-image/portfolio/pkl-sejahtera.png';
import './ShotCutArticle.css';

export function PklArticle({ onBack }) {
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
                  navigator.share({ title: 'PKL Sejahtera UI/UX Case Study', url: window.location.href });
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
              Social Impact & Cross-Disciplinary UI/UX
            </span>
          </div>

          <h1 className="shotcut-title text-6xl sm:text-8xl text-foreground font-normal tracking-tight leading-none mb-8 pt-4">
            PKL Sejahtera
          </h1>

          <p className="text-xl sm:text-2xl text-foreground font-sans font-light leading-relaxed mb-8">
            UI Design for a Social Intervention Program — Collaborating with Psychology Students to Organize Sidewalk Street Vendors at Bekasi Station.
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
            src={pklMockup}
            alt="PKL Sejahtera UI Design Showcase"
            title="PKL Sejahtera — Mobile Interface Showcase"
            badge="Social Intervention UI"
            aspectRatio="aspect-[16/10]"
            caption="PKL Sejahtera: Empowering street vendors through inventory tracking, legal designated zones, and educational modules."
          />
        </div>

        {/* Article Body Content */}
        <div className="shotcut-content space-y-12 font-sans text-[17px] leading-relaxed text-foreground">

          {/* Section 1: The Origin */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              1. A Cross-Disciplinary Collaboration
            </h2>
            <p>
              Unlike most software engineering projects conducted strictly within the computer science major, PKL Sejahtera was a unique cross-disciplinary partnership. It originated with a friend from the Psychology major working on a capstone project for their <em>Psychological Intervention</em> course.
            </p>
            <p>
              Their team had formulated a behavioral and structural solution for managing informal street vendors (Pedagang Kaki Lima / PKL) occupying crowded pedestrian sidewalks around Bekasi Station. However, standard slides couldn't convey the tangible touchpoints. That's when they brought me on board to translate behavioral psychology theory into an intuitive mobile interface.
            </p>
          </section>

          {/* Section 2: Translating Concept to Features */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              2. Translating Psychology into Digital Solutions
            </h2>
            <p>
              To address vendor compliance, financial security, and spatial regulation, I designed three interconnected functional pillars:
            </p>
            <div className="space-y-4 my-4">
              <div className="rounded-2xl border border-dashed border-border bg-card p-5">
                <h4 className="text-base font-bold text-foreground mb-1">01. Simple Vendor Financial Dashboard</h4>
                <p className="text-sm text-muted-foreground">
                  Designed for varying digital literacy levels: clear daily & weekly income summaries (Pendapatan Hari Ini & Minggu Ini) and single-tap product price management.
                </p>
              </div>
              <div className="rounded-2xl border border-dashed border-border bg-card p-5">
                <h4 className="text-base font-bold text-foreground mb-1">02. Regulated Legal Zones (Zona Legal)</h4>
                <p className="text-sm text-muted-foreground">
                  Interactive map highlighting sanctioned vendor slots around Bekasi Station to prevent congestion and avoid municipal enforcement clashes.
                </p>
              </div>
              <div className="rounded-2xl border border-dashed border-border bg-card p-5">
                <h4 className="text-base font-bold text-foreground mb-1">03. PKL Academy</h4>
                <p className="text-sm text-muted-foreground">
                  Micro-learning video modules covering food hygiene standards, business budgeting, and regulatory permits.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Key Learnings */}
          <div className="big-lesson-card relative overflow-hidden rounded-3xl p-8 my-10">
            <span className="big-lesson-tag text-xs uppercase tracking-widest font-sans">
              Interdisciplinary Insight
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white font-sans sm:text-3xl">
              Designing for Real-World Social Impact
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/90 font-sans">
              "This collaboration gave me the opportunity to apply human-centered design to genuine social friction. I learned how to bridge academic psychology with software ergonomics, adapting my vocabulary to build empathy across distinct disciplines."
            </p>
          </div>

          {/* Contact / Discussion Footer Card */}
          <div className="rounded-3xl border border-dashed border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-base font-bold text-foreground font-sans">Interested in PKL Sejahtera?</h4>
              <p className="text-xs text-foreground/80 font-sans mt-0.5">Let's connect and discuss social impact design & interdisciplinary workflows.</p>
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
