type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
};

function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <ul className="project-tech-list">
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={demo} target="_blank" rel="noreferrer">
          Demo
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;