export function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-2xl mb-12">
      <span className="chip mb-4">{eyebrow}</span>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{description}</p>}
    </div>
  );
}