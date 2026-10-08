import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const projectUrl = project.liveUrl ?? project.githubUrl;

  return (
    <article>
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/55 to-transparent p-5 pt-16 text-white">
          <ul
            aria-label={`Tekniker använda i ${project.title}`}
            className="mb-3 flex list-none flex-wrap gap-2"
          >
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="border border-white/40 bg-black/30 px-2.5 py-1 text-sm"
              >
                {technology}
              </li>
            ))}
          </ul>

          <h3 className="font-display text-3xl leading-heading">{project.title}</h3>

          <p className="mt-1 text-sm text-white/90">{project.subtitle}</p>
        </div>
      </div>

      <div className="flex gap-6 pt-4">
        <p className="flex-1 leading-body text-muted">{project.description}</p>

        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Se projektet ${project.title}`}
            className="shrink-0 font-semibold text-foreground"
          >
            Se projekt <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
