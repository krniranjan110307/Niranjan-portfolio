import { SectionTitle } from "@/components/SectionTitle";
import { portfolio } from "@/data/portfolio";

const skillGroups = [
  { label: "Frontend", values: portfolio.skills.frontend },
  { label: "Backend & APIs", values: portfolio.skills.backend },
  { label: "Data & Languages", values: portfolio.skills.data },
  { label: "Biotech & Research", values: portfolio.skills.science },
  { label: "Tools", values: portfolio.skills.tools },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <SectionTitle
        eyebrow="Skills"
        title="Skills grouped the way a portfolio recruiter can scan quickly."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <article key={group.label} className="panel reveal-card" style={{ animationDelay: `${index * 100}ms` }}>
            <h3 className="text-2xl font-semibold text-ink">{group.label}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.values.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-mist px-3 py-2 text-sm font-medium text-ink/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
