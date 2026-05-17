import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectModalProps = {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string;
        technologies: string[];
        githubUrl?: string;
        demoUrl?: string;
        image: string;
    } | null;
};

function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = "hidden";

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && project && (
                <motion.div
                    className="project-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.article
                        className="project-modal"
                        initial={{ opacity: 0, y: 40, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.96 }}
                        transition={{
                            duration: 0.38,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className="project-modal-close"
                            type="button"
                            aria-label="Cerrar modal"
                            onClick={onClose}
                        >
                            ×
                        </button>

                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-modal-image"
                        />

                        <div className="project-modal-content">
                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <ul className="project-technologies">
                                {project.technologies.map((technology) => (
                                    <li key={technology}>{technology}</li>
                                ))}
                            </ul>

                            <div className="project-links">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                )}

                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.article>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ProjectModal;
