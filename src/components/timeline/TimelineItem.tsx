type TimelineItemProps = {
    period: string;
    title: string;
    description: string;
    side: "left" | "right";
};

export function TimelineItem({
    period,
    title,
    description,
    side,
}: TimelineItemProps) {
    return (
        <article className={`timeline-item ${side} reveal`}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
                <span className="timeline-year">{period}</span>

                <h3>{title}</h3>

                <p>{description}</p>
            </div>
        </article>
    );
}
