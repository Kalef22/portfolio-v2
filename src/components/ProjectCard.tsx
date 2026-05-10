type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
};

function ProjectCard({
    title,
    description,
    technologies,
    githubUrl,
    demoUrl,
}: ProjectCardProps) {
    return (
        <article className="project-card reveal">
            <h3>{title}</h3>
            <p>{description}</p>

            <ul className="project-technologies">
                {technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>

            <div className="project-links">
                {githubUrl && (
                    <a href={githubUrl} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                )}

                {demoUrl && (
                    <a href={demoUrl} target="_blank" rel="noreferrer">
                        Demo
                    </a>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;
