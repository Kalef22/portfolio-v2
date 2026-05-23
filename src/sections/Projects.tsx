import { lazy, Suspense, useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

type Project = (typeof projects)[number];

const ProjectModal = lazy(() => import("../components/projects/ProjectModal"));

function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [hasOpenedModal, setHasOpenedModal] = useState(false);

    const openProjectModal = (project: Project) => {
        setHasOpenedModal(true);
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

            {hasOpenedModal && (
                <Suspense fallback={null}>
                    <ProjectModal
                        isOpen={selectedProject !== null}
                        project={selectedProject}
                        onClose={closeProjectModal}
                    />
                </Suspense>
            )}
        </section>
    );
}

export default Projects;
