import { ArrowRight } from 'lucide-react';
import { RevealText } from '@/components/motion/RevealText';
import { blogPosts } from '@/data/blog';
import { useClickSound } from '@/hooks/useClickSound';
import './Blog.css';

export function Blog() {
  const playClick = useClickSound();

  return (
    <section id="writing" className="blog-panel w-full border-t border-border">
      <span className="ghost-word" aria-hidden>
        Blog
      </span>
      <div className="ghost-ring" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="relative mb-12">
          <RevealText
            as="h2"
            text="Thoughts on dev, design, and building things."
            className="text-4xl font-normal tracking-tight text-foreground sm:text-5xl"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="blog-card group grid grid-rows-[auto_1fr_auto] overflow-hidden transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden bg-background border-b border-dashed border-border flex items-center justify-center p-6 sm:p-7">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full max-h-32 object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <span className="font-sans text-[11px] tracking-widest text-muted-foreground uppercase">
                  {post.label}
                </span>
                <h3 className="blog-title text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="line-clamp-3 font-sans text-xs leading-relaxed text-muted-foreground">
                  {post.summary}
                </p>
                <p className="mt-1 font-sans text-xs text-muted-foreground">
                  {post.author} - {post.published}
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-5 pb-5 font-sans text-xs font-medium text-foreground transition-transform group-hover:translate-x-1">
                Read more <ArrowRight className="size-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
