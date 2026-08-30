import { Image as ImageIcon } from 'lucide-react';

export function MockupPlaceholder({
  src,
  alt = 'Project Mockup',
  title = 'Image Mockup Placeholder',
  caption,
  aspectRatio = 'aspect-[16/9]',
  badge = 'Mockup Slot',
}) {
  if (src) {
    return (
      <figure className="my-8 overflow-hidden rounded-3xl border border-border bg-card shadow-xs">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full object-cover"
        />
        {caption && (
          <figcaption className="border-t border-border bg-muted/40 px-4 py-2.5 text-center text-xs text-foreground font-sans font-medium">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="my-8 overflow-hidden rounded-3xl border border-dashed border-border bg-card transition-all hover:border-foreground">
      <div className={`relative flex ${aspectRatio} w-full flex-col items-center justify-center p-6 text-center`}>
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(oklch(0.12_0_0/0.12)_1px,transparent_1px)] [background-size:18px_18px]" />

        <div className="relative z-10 flex flex-col items-center max-w-md">
          <div className="mb-3 flex size-12 items-center justify-center rounded-2xl border border-dotted border-border bg-background shadow-xs">
            <ImageIcon className="size-6 text-foreground" />
          </div>

          <span className="inline-flex items-center gap-1 rounded-full border border-dotted border-border bg-background px-3 py-1 text-[11px] font-sans text-foreground font-medium uppercase">
            ✦ {badge}
          </span>

          <h4 className="mt-2.5 text-sm font-semibold text-foreground font-sans">
            {title}
          </h4>

          <p className="mt-1 text-xs text-foreground/80 font-sans">
            Tambahkan screenshot / mockup desain di sini (ganti properti <code className="rounded border border-border bg-muted/60 px-1 py-0.5 font-sans text-[10px] text-foreground">src</code>).
          </p>
        </div>
      </div>

      {caption && (
        <figcaption className="border-t border-dashed border-border bg-muted/30 px-4 py-2.5 text-center text-xs text-foreground font-sans font-medium">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
