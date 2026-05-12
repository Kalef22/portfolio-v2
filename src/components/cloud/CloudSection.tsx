import { cloudData } from "./cloudData";

export function CloudSection() {
    return (
        <section className="cloud-section section" id="cloud">
            <div className="section-header reveal">
                <span className="section-tag">Cloud & AWS</span>
                <h2>Arquitectura cloud y servicios AWS</h2>
                <p>
                    Formación en soluciones cloud, despliegue de aplicaciones y
                    servicios escalables dentro del ecosistema AWS.
                </p>
            </div>

            <div className="cloud-grid">
                {cloudData.map((service) => (
                    <article className="cloud-card reveal" key={service.name}>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
