function PersonalSection() {
  return (
    <section
      id="personligt"
      aria-labelledby="personal-title"
      className="scroll-mt-16 border-t border-border py-section"
    >
      <div className="mx-auto w-[calc(100%-2*var(--page-padding))] max-w-content">
        <header className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-label text-muted">
            Utanför koden
          </p>

          <h2
            id="personal-title"
            className="max-w-[12ch] font-display text-section-title leading-heading tracking-[-0.02em]"
          >
            Det som laddar batterierna
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Padel */}
          <article className="group min-w-0">
            <div className="relative aspect-4/3 overflow-hidden bg-surface">
              {/* image + video */}
            </div>

            <div className="pt-4">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-label text-muted">
                Padel
              </h3>

              <p className="max-w-104 text-lg leading-body">
                Spelar oftare än jag borde. Om du besegrar mig bjuder jag på fika.
              </p>
            </div>
          </article>

          {/* Miles With Alex */}
          <article className="group min-w-0">{/* media + content */}</article>

          {/* Resor */}
          <article className="group min-w-0 md:col-span-2 md:w-[calc((100%-1.5rem)/2)] md:justify-self-center lg:col-span-1 lg:w-auto lg:justify-self-stretch">
            {/* media + content */}
          </article>
        </div>
      </div>
    </section>
  );
}

export default PersonalSection;
