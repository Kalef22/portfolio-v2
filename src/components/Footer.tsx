import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h3>Kaleff Villanueva</h3>

                    <p>
                        Full-Stack Web Developer especializado en aplicaciones
                        modernas, arquitectura backend y soluciones cloud con
                        AWS.
                    </p>
                </div>

                <div className="footer-links">
                    <a href="#hero">Inicio</a>
                    <a href="#about">Sobre mí</a>
                    <a href="#projects">Proyectos</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contacto</a>
                </div>

                <div className="footer-socials">
                    <a
                        href="https://github.com/Kalef22"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/kaleff-villanueva-desarrollador-web-aws/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a href="#hero" aria-label="Volver arriba">
                        <FaArrowUp />
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Kaleff Villanueva · Portfolio
                    V2
                </p>
            </div>
        </footer>
    );
}