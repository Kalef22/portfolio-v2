import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
    return (
        <section id="proyectos">
            <h2>Proyectos</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
