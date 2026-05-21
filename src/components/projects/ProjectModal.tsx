import { useEffect, useRef } from "react";
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
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();

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
                    role="presentation"
                >
                    <motion.article
                        className="project-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
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
                            ref={closeButtonRef}
                            className="project-modal-close"
                            type="button"
                            aria-label="Cerrar modal del proyecto"
                            onClick={onClose}
                        >
                            ×
                        </button>

                        <img
                            src={project.image}
                            alt={`Vista previa del proyecto ${project.title}`}
                            className="project-modal-image"
                        />

                        <div className="project-modal-content">
                            <h3 id="project-modal-title">{project.title}</h3>

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
                                        aria-label={`Ver código de ${project.title} en GitHub`}
                                    >
                                        GitHub
                                    </a>
                                )}

                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`Ver demo de ${project.title}`}
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