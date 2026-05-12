import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="section contact-section scroll-reveal">
            <div className="section-header">
                <span className="section-tag">Contacto</span>
                <h2>¿Construimos algo juntos?</h2>
                <p>
                    Estoy abierto a proyectos full-stack, cloud y
                    oportunidades donde pueda seguir creciendo como
                    desarrollador.
                </p>
            </div>

            <div className="contact-card">
                <div className="contact-content">
                    <h3>Disponible para nuevos proyectos</h3>
                    <p>
                        Si buscas un perfil junior con base sólida en desarrollo
                        web, mentalidad cloud y muchas ganas de aportar, podemos
                        hablar.
                    </p>

                    <div className="contact-actions">
                        <a
                            href="mailto:kalef.villanueva@gmail.com"
                            className="btn btn-primary"
                        >
                            <FaEnvelope />
                            Enviar email
                        </a>

                        <a
                            href="https://www.linkedin.com/in/kaleff-villanueva-desarrollador-web-aws/"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-secondary"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/Kalef22"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-secondary"
                        >
                            <FaGithub />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
