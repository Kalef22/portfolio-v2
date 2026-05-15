type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
    image: string;
};

function ProjectCard({
    title,
    description,
    technologies,
    githubUrl,
    demoUrl,
    image,
}: ProjectCardProps) {
    return (
        <article className="project-card reveal">
            {/* loading="lazy" La imagen no se carga hasta que está cerca de verse en pantalla. */}
            {/* decoding="async" El navegador puede decodificar la imagen sin bloquear tanto el render inicial. */}
            <img src={image} alt={title} loading="lazy" decoding="async" className="project-image" />

            <div className="project-content">
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
            </div>
        </article>
    );
}

export default ProjectCard;
