import heroImage from "../assets/images/alexander-johansson-hero.webp";

function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="flex min-h-[calc(100svh-4rem)] items-center">
      <div className="mx-auto grid w-[calc(100%-2*var(--page-padding))] max-w-content gap-16 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,29rem)] lg:items-center lg:gap-24 lg:py-16">
        <div>
          <h1
            id="hero-title"
            className="max-w-[10ch] font-display text-display leading-display tracking-tight"
          >
            Alexander
            <span className="block">Johansson</span>
          </h1>

          <p className="mt-5 text-xl font-light text-muted">Frontend-utvecklare</p>

          <p className="mt-8 max-w-lg text-lg leading-body text-muted">
            Tio år i säljbranschen lärde mig att förstå människor. Nu tar jag med mig det
            perspektivet in i frontend.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projekt"
              className="inline-flex min-h-18 items-center justify-center gap-3 rounded-md bg-foreground px-7 text-base font-semibold text-background transition-opacity hover:opacity-80"
            >
              Se projekten
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="/documents/alexander-johansson-cv.pdf"
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-18 items-center justify-center rounded-md border border-border px-7 text-base font-semibold text-foreground transition-colors hover:border-foreground"
            >
              Visa CV
            </a>
          </div>
        </div>

        <div className="aspect-4/5 w-full max-w-lg bg-surface lg:max-w-none">
          <img
            src={heroImage}
            alt="Porträtt av Alexander Johansson med en kaffekopp i handen"
            width={800}
            height={1000}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
