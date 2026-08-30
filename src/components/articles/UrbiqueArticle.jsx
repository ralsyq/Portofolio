import { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MockupPlaceholder } from '@/components/ui/MockupPlaceholder';
import { useClickSound } from '@/hooks/useClickSound';

import mockup1 from '@/assets/project-image/fastware/mockup.jpeg';
import mockup2 from '@/assets/project-image/fastware/mockup2.jpeg';
import frictionImg from '@/assets/project-image/fastware/friction.jpeg';
import coreImg from '@/assets/project-image/fastware/core.jpeg';
import solutionImpactImg from '@/assets/project-image/fastware/solution-impact.jpeg';
import uploadFullImg from '@/assets/project-image/fastware/upload-full.jpeg';
import uploadClothImg from '@/assets/project-image/fastware/upload-cloth.jpeg';
import pickBasicsImg from '@/assets/project-image/fastware/pick-basics.jpeg';
import canDo1Img from '@/assets/project-image/fastware/can-do-1.jpeg';
import canDo2Img from '@/assets/project-image/fastware/can-do-2.jpeg';
import canDo3Img from '@/assets/project-image/fastware/can-do-3.jpeg';
import learnImg from '@/assets/project-image/fastware/learn.png';

import './ShotCutArticle.css';

export function UrbiqueArticle({ onBack }) {
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
              <Clock className="size-3" /> 5 min read
            </span>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: 'FastWear Case Study', url: window.location.href });
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
            FastWear
          </h1>

          <p className="text-xl sm:text-2xl text-foreground font-sans font-light leading-relaxed mb-8">
            Your AI Stylist from Your Own Wardrobe — Helping office workers dress with confidence and eliminate morning decision fatigue.
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
                <Calendar className="size-3" /> 2026
              </div>
              <span>5 min read</span>
            </div>
          </div>
        </header>

        {/* Hero Showcases: Mockup 1 & Mockup 2 */}
        <div className="space-y-6 my-8">
          <MockupPlaceholder
            src={mockup1}
            alt="FastWear iOS App Hero Showcase"
            title="FastWear iOS App — Hero Showcase"
            badge="Hero Mockup"
            aspectRatio="aspect-[16/9]"
            caption="FastWear iOS App — Your AI Stylist from Your Own Wardrobe."
          />

          <MockupPlaceholder
            src={mockup2}
            alt="FastWear iOS App Interface Experience"
            title="FastWear iOS App — Digital Wardrobe & Mix and Match"
            badge="Interface Showcase"
            aspectRatio="aspect-[16/9]"
            caption="Dress with confidence every workday."
          />
        </div>

        {/* Article Body Content */}
        <div className="shotcut-content space-y-12 font-sans text-[17px] leading-relaxed text-foreground">

          {/* Section 1: The Daily Friction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              1. The Daily Friction: Morning Outfit Decision Fatigue
            </h2>
            <p>
              Imagine getting ready for work on a weekday morning. You open your closet filled with clothes, yet find yourself staring blankly for minutes wondering what to wear. As an office worker, have you ever spent too much time choosing your outfit?
            </p>

            {/* Friction Image */}
            <MockupPlaceholder
              src={frictionImg}
              alt="Morning Outfit Decision Fatigue Survey"
              title="Daily Time Spent & Lifetime Duration"
              badge="Survey Findings"
              aspectRatio="aspect-[16/9]"
              caption="Marks & Spencer Survey (2,000 participants): 13–17 minutes spent daily, 4–6 months over a lifetime, and only 44% of clothes worn regularly."
            />
          </section>

          {/* Section 2: Core Realization */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              2. The Core Realization
            </h2>

            {/* Core Image */}
            <MockupPlaceholder
              src={coreImg}
              alt="The Core Realization"
              title="The Core Realization"
              badge="Core Insight"
              aspectRatio="aspect-[16/9]"
              caption="The problem isn't a lack of clothing. It's the difficulty of discovering new combinations from what we already own."
            />
          </section>

          {/* Section 3: The Solution & Impact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              3. The Solution & Impact
            </h2>
            <p>
              FastWear transforms how people interact with their closets, eliminating decision fatigue and turning existing wardrobes into endless stylish combinations.
            </p>

            {/* Solution & Impact Image */}
            <MockupPlaceholder
              src={solutionImpactImg}
              alt="The Solution & Impact"
              title="What is the Impact?"
              badge="Value Proposition"
              aspectRatio="aspect-[16/9]"
              caption="Before vs After FastWear: Less morning stress, outfit ready in seconds, and more outfit possibilities."
            />
          </section>

          {/* Section 4: Building the Digital Wardrobe */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              4. Choose How You Build Your Wardrobe
            </h2>
            <p>
              To make digitizing a closet effortless, FastWear provides three intuitive onboarding paths:
            </p>

            <div className="space-y-6 my-6">
              <MockupPlaceholder
                src={uploadFullImg}
                alt="Upload Outfit Photos"
                title="01. Upload Outfit Photos"
                badge="Onboarding Flow"
                aspectRatio="aspect-[16/9]"
                caption="Import full outfit pictures directly from your camera roll."
              />

              <MockupPlaceholder
                src={uploadClothImg}
                alt="Upload Cloth Items"
                title="02. Upload Cloth Items"
                badge="Onboarding Flow"
                aspectRatio="aspect-[16/9]"
                caption="Snap individual garments for automatic AI background removal and segmentation."
              />

              <MockupPlaceholder
                src={pickBasicsImg}
                alt="Choose from Our Assets"
                title="03. Pick Basic Clothes from Assets"
                badge="Onboarding Flow"
                aspectRatio="aspect-[16/9]"
                caption="Select from standard baseline staples with a single tap."
              />
            </div>
          </section>

          {/* Section 5: What FastWear Can Do */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              5. What FastWear Can Do
            </h2>

            <div className="space-y-6 my-6">
              <MockupPlaceholder
                src={canDo1Img}
                alt="Automatic Extraction & Mix and Match"
                title="Automatic Extraction & Mix and Match Recommendation"
                badge="Core Features"
                aspectRatio="aspect-[16/9]"
                caption="Intelligent clothing segmentation and mix-and-match recommendation engine."
              />

              <MockupPlaceholder
                src={canDo2Img}
                alt="Save Favorite Looks"
                title="Save Favorite Looks & Lookbook History"
                badge="Core Features"
                aspectRatio="aspect-[16/9]"
                caption="Curate and organize your favorite daily outfit combinations."
              />

              <MockupPlaceholder
                src={canDo3Img}
                alt="AI Styling Variations"
                title="AI Styling Variations"
                badge="Core Features"
                aspectRatio="aspect-[16/9]"
                caption="Smart styling formulas adapted for office chic, smart casual, and weather conditions."
              />
            </div>
          </section>

          {/* Section 6: What Did We Learn? */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              6. What Did We Learn?
            </h2>

            {/* Learn Image */}
            <MockupPlaceholder
              src={learnImg}
              alt="What Did We Learn"
              title="Key Takeaways & Engineering Insights"
              badge="Key Learnings"
              aspectRatio="aspect-[16/9]"
              caption="Research to Society, Apple Human Interface Guidelines (HIG), and Swift + CoreML on-device intelligence."
            />
          </section>

          {/* Article Footer & Tags */}
          <footer className="pt-8 border-t border-dashed border-border space-y-6">
            <div className="flex flex-wrap gap-2">
              {['iOS Development', 'SwiftUI', 'CoreML', 'VisionKit', 'Apple HIG', 'Product Design'].map((tag) => (
                <span key={tag} className="rounded-full border border-dotted border-border bg-background px-3 py-1 text-xs font-sans text-foreground">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="rounded-3xl border border-dashed border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="text-base font-bold text-foreground font-sans">Interested in discussing FastWear?</h4>
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
