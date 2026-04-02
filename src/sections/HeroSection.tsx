import { portfolio } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="top" className="grid min-h-[80vh] items-center gap-10 pb-10 pt-2 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 lg:py-10">
      <div className="animate-rise">
        <p className="inline-flex rounded-full border border-sand bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-clay">
          Portfolio / Resume
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.92] text-ink sm:text-6xl lg:text-7xl">
          {portfolio.name}
        </h1>
        <p className="mt-5 max-w-3xl text-xl font-medium leading-8 text-clay">
          {portfolio.title}
        </p>
        <p className="mt-6 max-w-3xl text-base leading-8 text-ink/75 sm:text-lg">
          {portfolio.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a className="primary-button" href="#projects">
            View Projects
          </a>
          <a className="secondary-button" href={portfolio.links.resume} target="_blank" rel="noreferrer">
            Download CV
          </a>
          <a className="secondary-button" href={`mailto:${portfolio.email}`}>
            Contact Me
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {portfolio.metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="rounded-[1.5rem] border border-sand/70 bg-white/75 p-5 shadow-soft animate-rise"
              style={{ animationDelay: `${120 + index * 120}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-clay">{metric.label}</p>
              <p className="mt-2 text-3xl font-bold text-ink">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-rise [animation-delay:180ms]">
        <div className="relative mx-auto max-w-md">
          <div className="absolute -left-6 top-8 h-24 w-24 rounded-3xl bg-rose/70 blur-2xl" />
          <div className="absolute -bottom-8 right-0 h-28 w-28 rounded-full bg-sky/75 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-sand/70 bg-white/80 p-4 shadow-float">
            <img
              src="/Niranjan professional pic.jpeg"
              alt="Niranjan K R portrait"
              className="h-[420px] w-full rounded-[1.5rem] object-cover object-top animate-tilt sm:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
