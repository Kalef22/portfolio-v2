import { timelineData } from "./timelineData";
import { TimelineItem } from "./TimelineItem";

export function Timeline() {
    return (
        <section className="timeline-section section" id="experience">
            <div className="section-header reveal">
                <span className="section-tag">Mi camino</span>
                <h2>Experiencia y formación</h2>
                <p>
                    Una evolución constante combinando desarrollo web, cloud
                    computing y aprendizaje práctico.
                </p>
            </div>

            <div className="timeline">
                {timelineData.map((item, index) => (
                    <TimelineItem
                        key={item.title}
                        period={item.period}
                        title={item.title}
                        description={item.description}
                        side={index % 2 === 0 ? "left" : "right"}
                    />
                ))}
            </div>
        </section>
    );
}
