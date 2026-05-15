import Reveal from "../components/Reveal";

function About() {
    return (
        <section id="about" className="about">
            <Reveal>
                <div className="section-header">
                    <span>Sobre mí</span>
                    <h2>Perfil técnico</h2>
                </div>
            </Reveal>
            
            <Reveal delay={0.15}>
                <div className="about-content">
                    <p>
                        Soy desarrollador web enfocado en crear aplicaciones
                        modernas, escalables y bien estructuradas. Trabajo
                        principalmente con JavaScript, React, TypeScript, Node.js y
                        Express.
                    </p>

                    <p>
                        Actualmente estoy reforzando mis conocimientos en
                        arquitectura backend, buenas prácticas de desarrollo, bases
                        de datos y servicios cloud con AWS.
                    </p>

                    <p>
                        Mi objetivo es construir soluciones útiles, mantenibles y
                        orientadas a negocio, combinando desarrollo full-stack con
                        una visión cloud.
                    </p>
                </div>
            </Reveal>
        </section>
    );
}

export default About;
