import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaAws,
} from "react-icons/fa";

import { SiTypescript, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const skillIcons: Record<string, React.ReactNode> = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JavaScript: <FaJs />,
    TypeScript: <SiTypescript />,
    React: <FaReact />,
    "Node.js": <FaNodeJs />,
    Express: <SiExpress />,
    MongoDB: <SiMongodb />,
    SQL: <SiMysql />,
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
    AWS: <FaAws />,
};

import { skills } from "../data/skills";

function Skills() {
    return (
        <section id="skills" className="skills reveal">
            <h2>Tecnologías</h2>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <article className="skill-card" key={skill}>
                        <span>{skillIcons[skill]}</span>
                        <p>{skill}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Skills;
