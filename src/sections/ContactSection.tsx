import ScrollReveal from "../components/ScrollReveal";

function ContactSection() {
  return (
    <section
      id="kontakt"
      aria-labelledby="contact-title"
      className="scroll-mt-16 border-t border-border py-section"
    >
      <div className="mx-auto w-[calc(100%-2*var(--page-padding))] max-w-content">
        <div className="max-w-216">
          <ScrollReveal>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-label text-muted">
                Kontakt
              </p>

              <h2
                id="contact-title"
                className="font-display text-[clamp(3.75rem,3rem+5vw,7.5rem)] leading-[0.9] tracking-[-0.04em]"
              >
                Säg hej.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-body text-muted">
                Öppen för LIA-samtal, samarbeten och padelutmaningar. Säg hej — jag svarar.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href="mailto:alexander.johansson8910@gmail.com"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-foreground bg-foreground px-4 font-semibold text-background transition-colors hover:border-accent hover:bg-accent"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Skicka mejl
              </a>

              <a
                href="https://www.linkedin.com/in/alexander-johansson-88a568208/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center border border-border px-4 font-semibold transition-colors hover:border-foreground"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/AlexJCodes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center border border-border px-4 font-semibold transition-colors hover:border-foreground"
              >
                GitHub
              </a>

              <a
                href="/documents/alexander-johansson-cv.pdf"
                download
                className="group/download inline-flex min-h-12 items-center justify-center gap-2 border border-border px-4 font-semibold transition-colors hover:border-foreground"
              >
                Ladda ned CV
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  className="transition-transform motion-safe:group-hover/download:translate-y-0.5"
                >
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
