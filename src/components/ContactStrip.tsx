import { portfolio } from "@/data/portfolio";

export function ContactStrip() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-4 z-30 mb-10 rounded-[1.6rem] border border-[#d9c4ae]/70 bg-[rgba(255,250,244,0.82)] px-4 py-3 shadow-soft backdrop-blur-xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="font-display text-2xl font-semibold tracking-[0.04em] text-ink">
            Niranjan K R
          </a>
          <a className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-ivory sm:inline-flex" href={portfolio.links.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-ink/70">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-3 py-2 transition duration-300 hover:bg-white hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-2 text-sm">
            <a className="rounded-full border border-sand/80 px-3 py-2 text-ink/75 transition hover:bg-white" href={`mailto:${portfolio.email}`}>
              Email
            </a>
            <a className="rounded-full border border-sand/80 px-3 py-2 text-ink/75 transition hover:bg-white" href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="rounded-full border border-sand/80 px-3 py-2 text-ink/75 transition hover:bg-white" href={portfolio.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
