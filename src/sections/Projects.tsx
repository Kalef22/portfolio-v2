import ProjectCard from "../components/projects/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

function Projects() {
    return (
        <section id="projects" className="projects">
            <Reveal>
                <h2>Proyectos</h2>
            </Reveal>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <Reveal key={project.title} delay={index * 0.15}>
                        <ProjectCard {...project} />
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default Projects;
