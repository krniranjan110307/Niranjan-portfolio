import { SectionTitle } from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <SectionTitle
        eyebrow="Experience"
        title="Internship experience across software, AI, biotechnology, and research."
      />

      <div className="section-grid">
        {portfolio.experience.map((item, index) => (
          <article
            key={item.company}
            className="panel reveal-card grid items-start gap-5 lg:grid-cols-[minmax(240px,300px)_1fr]"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4e7db] text-lg font-bold text-clay">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-clay">
                  {item.period}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-ink">{item.company}</h3>
                <p className="text-base text-ink/65">{item.role}</p>
              </div>
            </div>

            <ul className="grid gap-3 text-base leading-7 text-ink/75">
              {item.points.map((point) => (
                <li key={point} className="rounded-[1.1rem] border border-sand/50 bg-[#fffdf9] px-4 py-3">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
