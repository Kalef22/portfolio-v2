import { FaGithub, FaLinkedin } from "react-icons/fa";
function Hero() {
    return (
        <section id="hero" className="hero reveal">
            <h1>Kaleff Villanueva</h1>

            <h2>Full-Stack Web Developer | AWS Cloud Practitioner</h2>

            <p>
                Desarrollo aplicaciones web modernas utilizando JavaScript,
                React, Node.js y Express. Actualmente refuerzo mis conocimientos
                en TypeScript, arquitectura backend y servicios cloud con AWS.
            </p>

            <div className="hero-status">
                <span className="status-dot"></span>
                Disponible para proyectos full-stack y cloud.
            </div>

            <div className="hero-buttons">
                <a href="#proyectos" className="primary-button">
                    Ver proyectos
                </a>

                <a href="#contacto" className="secondary-button">
                    Contactar
                </a>
            </div>

            <div className="hero-socials">
                <a
                    href="https://github.com/Kalef22"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/kaleff-villanueva-desarrollador-web-aws"
                    target="_blank"
                    rel="noreferrer"
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

            <div className="hero-stats">
                <div className="hero-stat">
                    <h3>12+</h3>
                    <p>Tecnologías</p>
                </div>

                {/* <div className="hero-stat">
                    <h3>3</h3>
                    <p>Proyectos</p>
                </div> */}

                <div className="hero-stat">
                    <h3>AWS</h3>
                    <p>Cloud</p>
                </div>

                <div className="hero-stat">
                    <h3>MERN</h3>
                    <p>Frontend - Backend</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
