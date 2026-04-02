type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-3xl animate-rise">
      <div className="accent-line mb-4" />
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-clay">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-ink/75 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
