import { FaGithub, FaLinkedin } from 'react-icons/fa';
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

                <a href="/cv.pdf" className='cv-button'>
                    Descargar CV
                </a>
            </div>
        </section>
    );
}

export default Hero;
