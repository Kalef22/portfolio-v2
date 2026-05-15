import type { ReactNode } from "react";

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

import {
    SiTypescript,
    SiExpress,
    SiMongodb,
    SiMysql,
} from "react-icons/si";

import Reveal from "../components/Reveal";
import { skills } from "../data/skills";

const skillIcons: Record<string, ReactNode> = {
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

function Skills() {
    return (
        <section id="skills" className="skills">
            <Reveal>
                <h2>Tecnologías</h2>
            </Reveal>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <Reveal key={skill} delay={index * 0.05}>
                        <article className="skill-card">
                            <span>{skillIcons[skill]}</span>
                            <p>{skill}</p>
                        </article>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default Skills;