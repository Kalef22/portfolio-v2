import { skills } from "../data/skills";

function Skills() {
    return (
        <section id="skills" className="skills reveal">
            <h2>Tecnologías</h2>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <div key={skill} className="skill-card">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
