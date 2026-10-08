import { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const getScrollBehavior = (): ScrollBehavior => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return prefersReducedMotion ? "auto" : "smooth";
};

function ProjectsSection() {
  // Carousel reference and navigation state
  const trackRef = useRef<HTMLUListElement>(null);

  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Keep carousel controls in sync with the current scroll position
  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const updateControls = () => {
      const maximumScroll = track.scrollWidth - track.clientWidth;

      setCanScrollPrevious(track.scrollLeft > 1);
      setCanScrollNext(track.scrollLeft < maximumScroll - 1);
    };

    updateControls();

    track.addEventListener("scroll", updateControls, {
      passive: true,
    });

    window.addEventListener("resize", updateControls);

    return () => {
      track.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, []);

  // Scroll one project card at a time
  const scrollProjects = (direction: "previous" | "next") => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const projectItem = track.querySelector<HTMLElement>("[data-project-item]");

    if (!projectItem) {
      return;
    }

    const trackStyles = getComputedStyle(track);
    const gap = Number.parseFloat(trackStyles.columnGap) || 0;

    const scrollDistance = projectItem.offsetWidth + gap;

    track.scrollBy({
      left: direction === "next" ? scrollDistance : -scrollDistance,
      behavior: getScrollBehavior(),
    });
  };

  return (
    <section
      id="projekt"
      aria-labelledby="projects-title"
      className="scroll-mt-16 overflow-hidden border-t border-border py-section"
    >
      {/* Section heading */}
      <div className="mx-auto w-[calc(100%-2*var(--page-padding))] max-w-content">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-label text-muted">
            Utvalda projekt
          </p>

          <h2
            id="projects-title"
            className="mt-3 max-w-[12ch] font-display text-section-title leading-heading tracking-[-0.02em]"
          >
            Vad jag byggt
          </h2>
        </div>
      </div>

      {/* Horizontally scrollable project carousel */}
      <div className="relative [--project-card-width:31.25rem] xl:[--project-card-width:32.5rem]">
        <ul
          ref={trackRef}
          className="flex snap-x snap-mandatory list-none gap-6 overflow-x-auto pb-2 scrollbar-none"
          style={{
            paddingInlineStart:
              "max(var(--page-padding), calc((100% - var(--container-content)) / 2))",
            paddingInlineEnd: "var(--page-padding)",
            scrollPaddingInlineStart:
              "max(var(--page-padding), calc((100% - var(--container-content)) / 2))",
          }}
        >
          {/* Carousel controls */}
          <button
            type="button"
            aria-label="Föregående projekt"
            disabled={!canScrollPrevious}
            onClick={() => scrollProjects("previous")}
            className="absolute left-(--page-padding) top-[calc(var(--project-card-width)*0.375)] z-10 hidden size-11 -translate-x-1/2 -translate-y-1/2 place-items-center border border-[rgba(17,17,16,0.12)] bg-[rgba(243,240,233,0.88)] text-[#111110] backdrop-blur-sm transition-[border-color,opacity] hover:border-[rgba(17,17,16,0.30)] disabled:pointer-events-none disabled:opacity-0 lg:grid cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Nästa projekt"
            disabled={!canScrollNext}
            onClick={() => scrollProjects("next")}
            className="absolute right-(--page-padding) top-[calc(var(--project-card-width)*0.375)] z-10 hidden size-11 translate-x-1/2 -translate-y-1/2 place-items-center border border-[rgba(17,17,16,0.12)] bg-[rgba(243,240,233,0.88)] text-[#111110] backdrop-blur-sm transition-[border-color,opacity] hover:border-[rgba(17,17,16,0.30)] disabled:pointer-events-none disabled:opacity-0 lg:grid cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {projects.map((project) => (
            <li
              key={project.id}
              data-project-item
              className="w-[82vw] shrink-0 snap-start sm:w-[56vw] lg:w-125 xl:w-130"
            >
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectsSection;
