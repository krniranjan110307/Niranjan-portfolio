import { portfolio } from "@/data/portfolio";
import { ContactStrip } from "@/components/ContactStrip";
import { GlowOrb } from "@/components/GlowOrb";
import { SectionTitle } from "@/components/SectionTitle";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";

function App() {
  return (
    <div className="relative overflow-x-hidden bg-ivory text-ink">
      <GlowOrb className="left-[-8rem] top-10 h-72 w-72 bg-rose/60" />
      <GlowOrb className="right-[-6rem] top-[18rem] h-80 w-80 bg-sky/60" />
      <GlowOrb className="bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 bg-sage/50" />

      <div className="absolute inset-0 -z-10 bg-grain" />

      <main className="mx-auto max-w-7xl px-6 pb-16 pt-6 sm:px-8 lg:px-10">
        <ContactStrip />
        <HeroSection />

        <section id="about" className="section-shell">
          <SectionTitle
            eyebrow="About"
            title="A resume website rebuilt as a modern portfolio using your own details."
            description="This version keeps your academic background, internships, projects, and technical interests visible in a cleaner recruiter-friendly layout."
          />

          <div className="grid items-stretch gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="panel reveal-card">
              <p className="text-lg leading-8 text-ink/80">
                I am currently pursuing a B.Tech in Biotechnology while actively building
                modern web applications with React, TypeScript, Tailwind CSS, and backend
                APIs. My profile combines scientific thinking, full-stack development,
                applied machine learning exposure, and a strong willingness to learn fast.
              </p>
            </article>

            <aside className="panel reveal-card bg-white/75">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-clay">Highlights</p>
              <ul className="mt-4 space-y-3 text-sm text-ink/75">
                {portfolio.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-clay" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />

        <section id="education" className="section-shell">
          <SectionTitle
            eyebrow="Education"
            title="Academic foundation supporting both research and software growth."
          />

          <div className="panel reveal-card grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="text-3xl font-semibold text-ink">
                {portfolio.education.degree}
              </h3>
              <p className="mt-2 text-lg text-ink/75">
                {portfolio.education.school}
              </p>
              <p className="mt-4 inline-flex rounded-full bg-mist px-4 py-2 text-sm font-semibold text-ink/70">
                {portfolio.education.period}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/70 bg-white/70 p-5 animate-rise [animation-delay:120ms]">
                <p className="text-sm uppercase tracking-[0.24em] text-clay">
                  CGPA
                </p>
                <p className="mt-2 text-4xl font-semibold text-ink">
                  {portfolio.education.cgpa}
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/70 bg-white/70 p-5 animate-rise [animation-delay:240ms]">
                <p className="text-sm uppercase tracking-[0.24em] text-clay">
                  Location
                </p>
                <p className="mt-2 text-xl font-semibold text-ink">
                  {portfolio.location}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell">
          <div className="panel reveal-card relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(243,229,216,0.45),rgba(216,232,242,0.32))]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-clay">
                  Contact
                </p>
                <h2 className="mt-3 max-w-2xl font-display text-5xl leading-none text-ink sm:text-6xl">
                  Open to internships, software roles, and meaningful collaborations.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/75">
                  If you are looking for someone who can combine scientific thinking,
                  full-stack development, and a strong learning mindset, I would love
                  to connect.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a className="primary-button" href={`mailto:${portfolio.email}`}>
                  Email Me
                </a>
                <a className="secondary-button" href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="pb-6 pt-8 text-center text-sm text-ink/60">
          Built with React, TypeScript, and Tailwind CSS using Niranjan&apos;s resume details.
        </footer>
      </main>
    </div>
  );
}

export default App;
