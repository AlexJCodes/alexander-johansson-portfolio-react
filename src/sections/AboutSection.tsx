function AboutSection() {
  return (
    <section
      id="om"
      aria-labelledby="about-title"
      className="scroll-mt-16 border-t border-border py-section"
    >
      <div className="mx-auto grid w-[calc(100%-2*var(--page-padding))] max-w-content gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,32rem)] lg:items-start lg:gap-24">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-label text-muted">Om mig</p>

          <h2
            id="about-title"
            className="max-w-[11ch] font-display text-section-title leading-heading tracking-[-0.02em]"
          >
            Från säljgolvet
            <span className="block italic">till VS Code.</span>
          </h2>
        </div>

        <div className="grid max-w-152 gap-6 text-lg leading-body text-muted">
          <p className="text-[clamp(1.25rem,1rem+0.75vw,1.5rem)] font-normal leading-normal text-foreground">
            Efter många år inom försäljning och ledarskap bytte jag riktning mot frontend – men tog
            med mig det viktigaste: förståelsen för människor.
          </p>

          <p>
            Jag studerar frontendutveckling på Medieinstitutet och gillar att bygga digitala
            lösningar som är tydliga, användbara och genomtänkta – både i gränssnittet och under
            ytan.
          </p>

          <p>
            Min bakgrund har lärt mig att lyssna, lösa problem och arbeta mot ett gemensamt mål. Nu
            kombinerar jag det perspektivet med kod, design och ett växande tekniskt kunnande.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
