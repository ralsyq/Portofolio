import { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MockupPlaceholder } from '@/components/ui/MockupPlaceholder';
import { useClickSound } from '@/hooks/useClickSound';

import kakyuhMockup from '@/assets/project-image/portfolio/kakyuh.png';
import './ShotCutArticle.css';

export function KakyuhArticle({ onBack }) {
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
                  navigator.share({ title: 'KakYuh Bike Rental App Case Study', url: window.location.href });
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
              Mobile App & Database Engineering
            </span>
          </div>

          <h1 className="shotcut-title text-6xl sm:text-8xl text-foreground font-normal tracking-tight leading-none mb-8 pt-4">
            KakYuh
          </h1>

          <p className="text-xl sm:text-2xl text-foreground font-sans font-light leading-relaxed mb-8">
            Fast-Paced Bike Rental Mobile Application Built in a 1-Week Class Challenge at Binus University.
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
            src={kakyuhMockup}
            alt="KakYuh Bike Rental App Interface Showcase"
            title="KakYuh — Mobile Bike Rental App Showcase"
            badge="Project Overview"
            aspectRatio="aspect-[16/10]"
            caption="KakYuh: A simple, fast-paced bike rental mobile app featuring Firebase integration and frictionless user flows."
          />
        </div>

        {/* Article Body Content */}
        <div className="shotcut-content space-y-12 font-sans text-[17px] leading-relaxed text-foreground">

          {/* Section 1: The Challenge */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              1. The 1-Week Sprint Challenge
            </h2>
            <p>
              KakYuh was born out of one of the fastest-paced, high-pressure group challenges during my studies at Binus University. When the assignment was announced, none of our group members had prior mobile application development experience, except for me and my teammate Laudita.
            </p>
            <p>
              With only 7 days from project kickoff to final live demo, we faced a stark reality: either risk scope creep and miss the deadline, or take decisive leadership to establish a laser-focused MVP.
            </p>
          </section>

          {/* Section 2: Leadership & Scoping */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              2. Leadership & Ruthless Scoping
            </h2>
            <p>
              Recognizing the tight deadline, Laudita and I stepped up to lead the team. We immediately ran a rapid scoping session to isolate the core value proposition of a campus bike rental service:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="rounded-2xl border border-dashed border-border bg-card p-5">
                <h4 className="text-base font-bold text-foreground mb-1">Seamless User Authentication</h4>
                <p className="text-sm text-muted-foreground">
                  Quick sign-up and login so students could unlock and rent a bike within seconds of opening the application.
                </p>
              </div>
              <div className="rounded-2xl border border-dashed border-border bg-card p-5">
                <h4 className="text-base font-bold text-foreground mb-1">Real-Time Transactions</h4>
                <p className="text-sm text-muted-foreground">
                  Live rental status, bike availability indicators, and instant transaction processing with real-time feedback.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Personal Contribution */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              3. Personal Contribution & Firebase Integration
            </h2>
            <p>
              As the Database Developer and App Flow Coordinator, I took ownership of:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/90">
              <li>
                <strong>Firebase Database Integration:</strong> Configured authentication rules, live data listeners, and structured database models for user accounts and rental transaction states.
              </li>
              <li>
                <strong>End-to-End App Flow:</strong> Coordinated screen navigation and input validation to guarantee zero friction between login, fleet selection, and checkout.
              </li>
              <li>
                <strong>Team Mentorship:</strong> Ensured every teammate understood their tasks, resolving blockers quickly to maintain momentum throughout the sprint.
              </li>
            </ul>
          </section>

          {/* Section 4: Results & Key Takeaway */}
          <div className="big-lesson-card relative overflow-hidden rounded-3xl p-8 my-10">
            <span className="big-lesson-tag text-xs uppercase tracking-widest font-sans">
              Key Project Result
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white font-sans sm:text-3xl">
              Perfect Score Under Extreme Deadlines
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/90 font-sans">
              "Despite the pressure and steep learning curve, we delivered a fully functional, bug-free prototype on time and earned a perfect score from our lecturer. This project cemented my ambition not just to write code, but to lead and inspire teams to solve challenges together."
            </p>
          </div>

          {/* Contact / Discussion Footer Card */}
          <div className="rounded-3xl border border-dashed border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-base font-bold text-foreground font-sans">Interested in KakYuh?</h4>
              <p className="text-xs text-foreground/80 font-sans mt-0.5">Let's connect and discuss full-stack mobile development & sprint execution.</p>
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
