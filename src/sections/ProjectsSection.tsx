import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function ProjectsSection() {
  return (
    <section
      id="projekt"
      aria-labelledby="projects-title"
      className="scroll-mt-16 min-h-[calc(100svh-4rem)] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-content px-5 lg:px-10">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-label text-muted">Utvalda projekt</p>

          <h2 id="projects-title" className="mt-3 font-display text-section-title leading-heading">
            Vad jag byggt
          </h2>
        </div>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-none] [&::-webkit-scrollbar]:hidden">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[88%] shrink-0 snap-start md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
