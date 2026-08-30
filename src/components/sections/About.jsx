import meIcon from '@/assets/me-icon.png';
import './About.css';

export function About() {
  return (
    <section id="about" className="about-panel w-full border-t border-border bg-muted/30">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
        <h2 className="mb-10 text-4xl font-normal tracking-tight text-foreground uppercase sm:text-5xl">
          About
        </h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Manifesto Story Copy */}
          <div className="about-copy lg:col-span-8">
            <p className="mb-6 text-lg leading-relaxed font-medium text-foreground">
              I'm going to be honest with you. I used to think something was wrong with
              me. Everyone around me had a plan. Doctor. Engineer. Pilot. Pick a lane,
              stay in it, master it, retire. I couldn't do it. Not because I was lazy.
              The opposite, actually. I wanted to do everything. Build things. Break
              things. Learn things nobody taught me. Solve problems that hadn't been
              named yet. Help people in ways that didn't fit a job title. Every time I
              got good at something, I wanted to learn the next thing. People called it
              a lack of focus. I called it being alive. School didn't help. The whole
              system was basically a memory competition. Memorise this. Reproduce it.
              Get graded. Repeat.
            </p>

          </div>

          {/* Right Column: Character Vector Illustration */}
          <div className="about-avatar-wrapper flex flex-col items-center justify-center lg:col-span-4 lg:sticky lg:top-2">
            <div className="relative flex flex-col items-center">
              <img
                src={meIcon}
                alt="Raisya Putri Agustin - Vector Illustration"
                loading="lazy"
                decoding="async"
                className="w-48 sm:w-56 lg:w-64 max-h-[460px] object-contain drop-shadow-sm transition-transform duration-500 ease-out hover:scale-105"
              />
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
