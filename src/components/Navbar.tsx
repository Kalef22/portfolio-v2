import { useEffect, useState } from "react";
import Logo from "../assets/marcakalef.svg?react";
import { useActiveSection } from "../hooks/useActiveSection";

const navLinks = [
    { label: "Sobre mí", href: "#about" },
    { label: "Proyectos", href: "#projects" },
    { label: "Tecnologías", href: "#skills" },
    { label: "Contacto", href: "#contact" },
];

function Navbar() {
    const activeSection = useActiveSection();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;

        const closeMenuOnScroll = () => {
            setIsMenuOpen(false);
        };

        window.addEventListener("scroll", closeMenuOnScroll);

        return () => {
            window.removeEventListener("scroll", closeMenuOnScroll);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            if (!target.closest(".navbar")) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
            <a href="#hero" className="navbar-logo" aria-label="Ir al inicio">
                <Logo />
            </a>

            <button
                className={`navbar-toggle ${isMenuOpen ? "navbar-toggle--open" : ""}`}
                type="button"
                aria-label={
                    isMenuOpen
                        ? "Cerrar menú de navegación"
                        : "Abrir menú de navegación"
                }
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
            >
                <span />
                <span />
                <span />
            </button>

            <nav
                className={`navbar-nav ${isMenuOpen ? "navbar-nav--open" : ""}`}
                aria-label="Navegación principal"
            >
                <ul className="navbar-links">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={
                                    activeSection === link.href.replace("#", "")
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                onClick={closeMenu}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
