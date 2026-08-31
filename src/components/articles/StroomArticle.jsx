import { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { MockupPlaceholder } from '@/components/ui/MockupPlaceholder';
import { useClickSound } from '@/hooks/useClickSound';

import mockupImg from '@/assets/project-image/stroom/mockup.png';
import personaImg from '@/assets/project-image/stroom/page-11.png';
import whyArImg from '@/assets/project-image/stroom/page-12.png';
import userFlowImg from '@/assets/project-image/stroom/page-13.png';
import playdohModelImg from '@/assets/project-image/stroom/page-4.png';
import playdohWorkspaceImg from '@/assets/project-image/stroom/page-5.png';
import playdohCompleteImg from '@/assets/project-image/stroom/page-6.png';
import playdohPreviewImg from '@/assets/project-image/stroom/page-7.png';

import './ShotCutArticle.css';

export function StroomArticle({ onBack }) {
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
                  navigator.share({ title: 'STROOM AR Case Study', url: window.location.href });
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
              iOS AR Product Design Case Study
            </span>
          </div>

          <h1 className="shotcut-title text-6xl sm:text-8xl text-foreground font-normal tracking-tight leading-none mb-8 pt-4">
            STROOM
          </h1>

          <p className="text-xl sm:text-2xl text-foreground font-sans font-light leading-relaxed mb-8">
            3D Augmented Reality to Learn Electricity Through Interactive Lamp Circuits: Empowering young robotics learners to visualize invisible power flows in real time.
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

        {/* Hero Mockup */}
        <div className="my-8">
          <MockupPlaceholder
            src={mockupImg}
            alt="STROOM iOS App Interface Showcase"
            title="STROOM iOS App: Interface Mockup"
            badge="Hero Mockup"
            aspectRatio="aspect-[16/9]"
            caption="STROOM iOS App: 3D Augmented Reality to Learn Electricity Through Interactive Lamp Circuits."
          />
        </div>

        {/* Article Body Content */}
        <div className="shotcut-content space-y-12 font-sans text-[17px] leading-relaxed text-foreground">

          {/* Section 1: The Challenge & User Persona */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              1. The Challenge & User Persona
            </h2>
            <p>
              For young beginner robotics students (ages 10-16), learning electronics fundamentals can be overwhelmingly abstract. While putting together mechanical chassis and motors is exciting, grasping electrical current flow remains an invisible barrier.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-foreground/90">
              <li>
                <strong>Invisible Power Flow:</strong> Students cannot see how electricity actually moves through batteries, wires, switches, and components inside a robot.
              </li>
              <li>
                <strong>Abstract Concepts:</strong> Schematics and circuit diagrams are difficult to conceptualize without immediate visual cause-and-effect feedback.
              </li>
              <li>
                <strong>Engagement Drop-off:</strong> Students quickly lose engagement during long theory-heavy sessions and often stop exploring once the robot simply turns on, without understanding the underlying circuitry.
              </li>
            </ul>

            {/* Persona Image */}
            <MockupPlaceholder
              src={personaImg}
              alt="STROOM User Persona: Beginner Robotics Learner"
              title="User Persona & Core Pain Points"
              badge="User Research"
              aspectRatio="aspect-[16/9]"
              caption="Target Audience: Beginner robotics students aged 10-16 encountering abstract electronics concepts."
            />
          </section>

          {/* Section 2: Why 3D AR is the Right Technology */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              2. Why 3D AR is the Right Solution
            </h2>
            <p>
              By leveraging Apple ARKit and RealityKit, STROOM bridges the tactile physical world with digital visualization:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="rounded-2xl border border-dashed border-border bg-card p-5">
                <h4 className="text-base font-bold text-foreground mb-1">See What's Normally Invisible</h4>
                <p className="text-sm text-muted-foreground">
                  Users can actually see dynamic electron and power currents streaming through batteries, wires, sensors, and lamps in real time right on their physical desk.
                </p>
              </div>
              <div className="rounded-2xl border border-dashed border-border bg-card p-5">
                <h4 className="text-base font-bold text-foreground mb-1">Connect the Dots</h4>
                <p className="text-sm text-muted-foreground">
                  Interactive 3D AR helps students understand how every single component is interconnected, and why changing one part or resistance immediately alters the entire circuit.
                </p>
              </div>
            </div>

            {/* Why AR Image */}
            <MockupPlaceholder
              src={whyArImg}
              alt="Why 3D AR is the Right Technology for Electrical Education"
              title="Spatial Visualization: See the Invisible"
              badge="Core Advantage"
              aspectRatio="aspect-[16/9]"
              caption="Visualizing real-time current flow through interconnected electrical networks in 3D AR."
            />
          </section>

          {/* Section 3: Concept & User Journey Flow */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              3. Concept & User Journey Flow
            </h2>
            <p>
              The learning experience is structured around an intuitive 5-step guided exploratory loop:
            </p>

            <ol className="list-decimal pl-5 space-y-2 text-foreground/90">
              <li><strong>Scan the Room:</strong> Detect horizontal surfaces using LiDAR/ARKit plane anchors to anchor the interactive workspace.</li>
              <li><strong>Show Object:</strong> Anchor a full 3D interactive vehicle robot onto the user's desk.</li>
              <li><strong>Choose Target Lamp:</strong> Select which vehicle light to fix (Headlight, Low Beam, Turn Signal, Brake Light).</li>
              <li><strong>Assemble Components:</strong> Drag components from the toolbox onto the breadboard to complete the closed-loop circuit.</li>
              <li><strong>Preview & Verify:</strong> Test the assembled circuit and witness real-time light beam rendering and shadows.</li>
            </ol>

            {/* Flow Image */}
            <MockupPlaceholder
              src={userFlowImg}
              alt="STROOM Concept & User Flow Diagram"
              title="5-Step Interactive Guided Workflow"
              badge="User Journey"
              aspectRatio="aspect-[16/9]"
              caption="Seamless flow from environmental room scanning to hands-on circuit assembly and physical verification."
            />
          </section>

          {/* Section 4: Low-Fidelity Playdoh Prototyping */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              4. Tactile Playdoh Prototyping
            </h2>
            <p>
              Before committing to 3D models and code, we built rapid physical prototypes using modeling clay (Playdoh) and paper mockups. This allowed us to quickly test spatial affordances, component ergonomics, and physical-to-digital mapping.
            </p>

            <div className="space-y-6 my-6">
              <MockupPlaceholder
                src={playdohModelImg}
                alt="Playdoh Spatial Interface Prototype"
                title="Spatial Anchoring & Task Preview"
                badge="Playdoh Prototype"
                aspectRatio="aspect-[16/9]"
                caption="Testing environmental room detection, 3D character selection, and task briefing cards."
              />

              <MockupPlaceholder
                src={playdohWorkspaceImg}
                alt="Playdoh Toolbox & Breadboard Workspace"
                title="Tactile Breadboard & Component Toolbox"
                badge="Playdoh Prototype"
                aspectRatio="aspect-[16/9]"
                caption="Evaluating modular socket layouts and tactile component organization."
              />

              <MockupPlaceholder
                src={playdohCompleteImg}
                alt="Playdoh Assembled Circuit"
                title="Completed Circuit Validation"
                badge="Playdoh Prototype"
                aspectRatio="aspect-[16/9]"
                caption="Simulating completed closed-circuit loops and connection verification in physical space."
              />

              <MockupPlaceholder
                src={playdohPreviewImg}
                alt="Playdoh Final Model Preview"
                title="Final Lamp Assembly Preview"
                badge="Playdoh Prototype"
                aspectRatio="aspect-[16/9]"
                caption="Final model preview validating optical components and light housing geometry."
              />
            </div>
          </section>

          {/* Section 6: Key Takeaway / Lesson Card */}
          <div className="big-lesson-card relative overflow-hidden rounded-3xl p-8 my-10">
            <span className="big-lesson-tag text-xs uppercase tracking-widest font-sans">
              Key Academy Insight
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white font-sans sm:text-3xl">
              Transforming Invisible Physics into Tangible Joy
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/90 font-sans">
              "By moving electrical education out of dry 2D textbooks and into spatial 3D Augmented Reality, students don't just memorize formulas, they gain an intuitive mental model of how electricity flows through their world."
            </p>
          </div>

          {/* Contact / Discussion Footer Card */}
          <div className="rounded-3xl border border-dashed border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-base font-bold text-foreground font-sans">Interested in discussing STROOM?</h4>
              <p className="text-xs text-foreground/80 font-sans mt-0.5">Let's connect and talk about ARKit, spatial computing & product engineering.</p>
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
