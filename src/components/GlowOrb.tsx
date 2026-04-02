type GlowOrbProps = {
  className: string;
};

export function GlowOrb({ className }: GlowOrbProps) {
  return (
    <div
      className={`pointer-events-none absolute -z-10 rounded-full blur-3xl animate-float ${className}`}
      aria-hidden="true"
    />
  );
}
