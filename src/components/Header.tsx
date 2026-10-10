import { useEffect, useRef, useState } from "react";

const navigationLinks = [
  { href: "#projekt", label: "Projekt" },
  { href: "#om", label: "Om mig" },
  { href: "#kompetens", label: "Kompetens" },
  { href: "#kontakt", label: "Kontakt" },
];

type Theme = "light" | "dark";

function Header() {
  // UI state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );

  // DOM references used for focus management in the mobile navigation.
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  // Handle accessibility and page behaviour while the mobile menu is open.
  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    firstMenuLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  // Add visual separation to the sticky header after the user starts scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    const root = document.documentElement;

    root.dataset.themeSwitching = "true";
    root.dataset.theme = nextTheme;

    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        delete root.dataset.themeSwitching;
      });
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background transition-colors ${
        isScrolled ? "border-border" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex min-h-16 w-[calc(100%-2*var(--page-padding))] max-w-content items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          aria-label="Alexander Johansson, startsida"
          className="inline-flex items-center gap-3 p-1"
        >
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center bg-foreground text-sm font-bold text-background"
          >
            AJ
          </span>

          <span className="hidden text-sm font-medium md:inline">Alexander Johansson</span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Huvudnavigation" className="hidden md:block">
          <ul className="flex list-none items-center gap-6">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href="/documents/alexander-johansson-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                CV
              </a>
            </li>
          </ul>
        </nav>

        {/* Header controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={theme === "light" ? "Byt till mörkt tema" : "Byt till ljust tema"}
            onClick={toggleTheme}
            className="grid size-11 place-items-center text-foreground"
          >
            {theme === "light" ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79Z" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
              </svg>
            )}
          </button>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
            className="grid size-11 place-items-center text-foreground md:hidden"
          >
            {isMenuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobilnavigation"
          className="fixed inset-x-0 top-16 bottom-0 z-40 bg-background md:hidden"
        >
          <div className="mx-auto h-full max-w-content px-5 py-16">
            <ul className="flex list-none flex-col gap-6">
              {navigationLinks.map((link, index) => (
                <li key={link.href}>
                  <a
                    ref={index === 0 ? firstMenuLinkRef : undefined}
                    href={link.href}
                    className="font-display text-4xl"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="/documents/alexander-johansson-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-4xl"
                  onClick={closeMenu}
                >
                  CV
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
