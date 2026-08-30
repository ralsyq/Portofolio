import { useState } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { RevealText } from '@/components/motion/RevealText';
import { projects } from '@/data/projects';
import { useClickSound } from '@/hooks/useClickSound';
import { cn } from '@/lib/utils';
import './Work.css';

const MotionDiv = motion.div;

const CATEGORIES = ['All', 'iOS Apps', 'Web Apps', 'UI/UX Prototype', 'Data Analysis'];

export function Work({ onOpenArticle }) {
  const playClick = useClickSound();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  // High-performance direct motion values for zero-delay cursor tracking
  const rawX = useMotionValue(-500);
  const rawY = useMotionValue(-500);

  // Silky responsive spring with ultra-low latency
  const smoothX = useSpring(rawX, { stiffness: 600, damping: 35, mass: 0.1 });
  const smoothY = useSpring(rawY, { stiffness: 600, damping: 35, mass: 0.1 });

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => {
        const cat = (p.category || '').toLowerCase();
        const selected = selectedCategory.toLowerCase();
        if (selected === 'ios apps') return cat.includes('ios') || cat.includes('swift') || cat.includes('mobile');
        if (selected === 'web apps') return cat.includes('web') || cat.includes('ai') || cat.includes('desktop');
        if (selected === 'ui/ux prototype') return cat.includes('ui') || cat.includes('ux') || cat.includes('design') || cat.includes('prototype');
        if (selected === 'data analysis') return cat.includes('analytic') || cat.includes('data');
        return cat.includes(selected);
      });

  const hoveredProjectData = projects.find((p) => p.title === hoveredProject);

  const handleCardClick = (project, e) => {
    // If user clicked directly on github or external link, don't hijack
    if (e.target.closest('a') || e.target.closest('button')) return;

    if (project.hasArticle && onOpenArticle) {
      playClick();
      onOpenArticle(project.articleSlug || project.id);
    }
  };

  const handleMouseEnter = (project, e) => {
    if (e.target.closest('a') || e.target.closest('button')) {
      setHoveredProject(null);
      return;
    }
    setHoveredProject(project.title);
    const targetX = Math.min(e.clientX + 20, typeof window !== 'undefined' ? window.innerWidth - 325 : 500);
    const targetY = Math.min(Math.max(e.clientY - 120, 20), typeof window !== 'undefined' ? window.innerHeight - 380 : 300);
    rawX.jump(targetX);
    rawY.jump(targetY);
  };

  const handleMouseMove = (project, e) => {
    if (e.target.closest('a') || e.target.closest('button')) {
      setHoveredProject(null);
      return;
    }
    if (hoveredProject !== project.title) {
      setHoveredProject(project.title);
    }
    const targetX = Math.min(e.clientX + 20, typeof window !== 'undefined' ? window.innerWidth - 325 : 500);
    const targetY = Math.min(Math.max(e.clientY - 120, 20), typeof window !== 'undefined' ? window.innerHeight - 380 : 300);
    rawX.set(targetX);
    rawY.set(targetY);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <section id="work" className="work-panel w-full border-t border-border">
      <span className="ghost-word" aria-hidden>
        Cases
      </span>
      <div className="ghost-ring" aria-hidden />

      {/* Zero-delay Smooth GPU Spring Floating Preview */}
      <AnimatePresence>
        {hoveredProjectData && hoveredProjectData.hasArticle && (
          <MotionDiv
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            style={{
              x: smoothX,
              y: smoothY,
              position: 'fixed',
              top: 0,
              left: 0,
              width: '300px',
              zIndex: 9999,
              pointerEvents: 'none',
            }}
            className="hidden sm:flex flex-col gap-2.5 rounded-3xl border border-dashed border-foreground/80 bg-background/95 p-3.5 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-sans font-bold text-foreground uppercase tracking-wider">
                  Quick Look
                </span>
                <span className="text-[11px] font-sans text-muted-foreground">• {hoveredProjectData.title}</span>
              </div>
              <span className="rounded-full border border-dotted border-border px-2 py-0.5 text-[9px] font-sans text-foreground font-semibold">
                UI Preview
              </span>
            </div>

            {/* Real UI Mockup Image Slot */}
            {hoveredProjectData.previewImage && (
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/80 bg-muted shadow-xs">
                <img
                  src={hoveredProjectData.previewImage}
                  alt={`${hoveredProjectData.title} UI Mockup Preview`}
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <p className="text-xs font-semibold text-foreground font-sans leading-snug">
              {hoveredProjectData.previewTeaser || hoveredProjectData.tagline}
            </p>

            <div className="border-t border-dashed border-border pt-1.5 flex items-center justify-between text-[10px] font-sans text-foreground font-medium">
              <span>Case Study</span>
              <span>Click card to read ↗</span>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="relative mb-10">
          <RevealText
            as="h2"
            text="Recent Project"
            className="text-4xl font-normal tracking-tight text-foreground uppercase sm:text-5xl"
          />

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playClick();
                  setSelectedCategory(cat);
                }}
                className={cn(
                  'rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer',
                  selectedCategory === cat
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-dotted border-border bg-background/80 text-muted-foreground backdrop-blur-md hover:border-foreground hover:text-foreground'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="work-grid">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.title}
                onClick={(e) => handleCardClick(project, e)}
                onMouseEnter={(e) => handleMouseEnter(project, e)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={(e) => handleMouseMove(project, e)}
                className={cn(
                  'work-case group relative transition-all duration-300',
                  project.hasArticle && 'cursor-pointer hover:shadow-lg hover:border-foreground/50'
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="work-case-thumb flex size-14 items-center justify-center bg-muted">
                    <img
                      src={project.logo}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="size-10 object-contain grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
                    />
                  </div>

                  <div className="flex items-center gap-2.5">
                    {project.hasArticle && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playClick();
                          if (onOpenArticle) onOpenArticle(project.articleSlug || project.id);
                        }}
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer"
                      >
                        <BookOpen className="size-3" />
                        <span>Case Study</span>
                      </button>
                    )}

                    <a
                      href={project.demoUrl}
                      target={project.hasArticle ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.hasArticle) {
                          e.preventDefault();
                          playClick();
                          if (onOpenArticle) onOpenArticle(project.articleSlug || project.id);
                        } else {
                          playClick();
                        }
                      }}
                      aria-label={`${project.title} live demo`}
                      className="text-muted-foreground transition-colors hover:text-foreground p-1"
                    >
                      <ArrowUpRight className="size-5" />
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="block text-[11px] tracking-widest text-primary uppercase font-sans">
                      {project.category}
                    </span>
                    {project.frameworks && (
                      <div className="hidden sm:flex items-center gap-1.5">
                        {project.frameworks.slice(0, 2).map((fw) => (
                          <span key={fw} className="rounded bg-muted/60 px-1.5 py-0.5 text-[10px] font-sans text-muted-foreground">
                            {fw}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <h3 className="work-case-title text-2xl font-normal tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-1 font-sans text-sm font-medium text-muted-foreground">
                    {project.tagline}
                  </p>

                  <ul className="work-case-desc mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
