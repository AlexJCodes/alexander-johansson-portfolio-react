function SkillsSection() {
  return (
    <section
      id="kompetens"
      aria-labelledby="skills-title"
      className="scroll-mt-16 border-t border-border bg-surface py-section"
    >
      <div className="mx-auto w-[calc(100%-2*var(--page-padding))] max-w-content">
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-label text-muted">
            Kompetens
          </p>

          <h2
            id="skills-title"
            className="max-w-[12ch] font-display text-section-title leading-heading tracking-[-0.02em]"
          >
            Det jag jobbar med.
          </h2>
        </div>

        {/* Skill groups */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-6">
          <div>
            <h3 className="mb-4 border-b border-border pb-3 text-sm font-semibold uppercase tracking-label">
              Frontend
            </h3>

            <ul className="grid list-none gap-2 font-display text-[clamp(1.5rem,1.25rem+0.75vw,2rem)] leading-[1.2]">
              <li>HTML</li>
              <li>CSS / SCSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 border-b border-border pb-3 text-sm font-semibold uppercase tracking-label">
              Backend & data
            </h3>

            <ul className="grid list-none gap-2 font-display text-[clamp(1.5rem,1.25rem+0.75vw,2rem)] leading-[1.2]">
              <li>Node.js</li>
              <li>Express</li>
              <li>REST API</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Databasmodellering</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 border-b border-border pb-3 text-sm font-semibold uppercase tracking-label">
              Design & kvalitet
            </h3>

            <ul className="grid list-none gap-2 font-display text-[clamp(1.5rem,1.25rem+0.75vw,2rem)] leading-[1.2]">
              <li>Figma</li>
              <li>UX / UI-design</li>
              <li>Responsiv design</li>
              <li>Tillgänglighet / WCAG</li>
              <li>Git & GitHub</li>
              <li>AI-assisterad utveckling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
