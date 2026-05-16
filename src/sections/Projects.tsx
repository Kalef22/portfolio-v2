import { useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

type Project = (typeof projects)[number];

function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const openProjectModal = (project: Project) => {
        setSelectedProject(project);
    };

    const closeProjectModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="projects">
            <Reveal>
                <h2>Proyectos</h2>
            </Reveal>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <Reveal key={project.title} delay={index * 0.15}>
                        <ProjectCard
                            {...project}
                            onOpen={() => openProjectModal(project)}
                        />
                    </Reveal>
                ))}
            </div>

            <ProjectModal
                isOpen={selectedProject !== null}
                project={selectedProject}
                onClose={closeProjectModal}
            />
        </section>
    );
}

export default Projects;