import { useEffect, useState } from "react";

const sectionIds = ["hero", "about", "projects", "skills", "contact"];

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "hero";

            sectionIds.forEach((id) => {
                const section = document.getElementById(id);

                if (section) {
                    const sectionTop = section.offsetTop - 120;

                    if (window.scrollY >= sectionTop) {
                        currentSection = id;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return activeSection;
}