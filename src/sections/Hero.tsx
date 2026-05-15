import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "../components/Reveal";

function Hero() {
    return (
        <section id="hero" className="hero">
            <Reveal>
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="status-dot" />
                        Disponible para proyectos full-stack y cloud
                    </div>

                    <h1>
                        Kaleff{" "}
                        <span className="hero-gradient-text">Villanueva</span>
                    </h1>

                    <h2>Full-Stack Web Developer | AWS Cloud Practitioner</h2>

                    <p>
                        Desarrollo aplicaciones web modernas utilizando
                        JavaScript, React, Node.js y Express. Actualmente
                        refuerzo mis conocimientos en TypeScript, arquitectura
                        backend y servicios cloud con AWS.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="primary-button">
                            Ver proyectos
                        </a>

                        <a href="#contact" className="secondary-button">
                            Contactar
                        </a>
                    </div>

                    <div className="hero-socials">
                        <a
                            href="https://github.com/Kalef22"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub de Kaleff Villanueva"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/kaleff-villanueva-desarrollador-web-aws"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn de Kaleff Villanueva"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="/cv.pdf"
                            className="cv-button"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Descargar CV
                        </a>
                    </div>

                    <Reveal delay={0.2}>
                        <div className="hero-stats">
                            <div className="hero-stat">
                                <h3>12+</h3>
                                <p>Tecnologías</p>
                            </div>

                            <div className="hero-stat">
                                <h3>AWS</h3>
                                <p>Cloud</p>
                            </div>

                            <div className="hero-stat">
                                <h3>MERN</h3>
                                <p>Frontend - Backend</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Reveal>
        </section>
    );
}

export default Hero;
