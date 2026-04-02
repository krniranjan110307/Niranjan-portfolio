import { SectionTitle } from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <SectionTitle
        eyebrow="Projects"
        title="Projects built from your resume, presented as a clean portfolio showcase."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {portfolio.projects.map((project, index) => (
          <article
            key={project.title}
            className="group panel reveal-card flex flex-col justify-between"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-clay">
                  {project.category}
                </p>
                <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-clay">
                  Project {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-ink">
                {project.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-ink/75">
                {project.description}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.outcomes.map((outcome) => (
                <span
                  key={outcome}
                  className="rounded-full border border-sand/60 bg-[#fffdf9] px-3 py-2 text-sm text-ink/70"
                >
                  {outcome}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
