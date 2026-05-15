import { useEffect, useState } from "react";
import Logo from "../assets/marcakalef.svg?react";

const navLinks = [
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Tecnologías", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

function Navbar() {
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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <a href="#hero" className="navbar-logo" aria-label="Ir al inicio">
        <Logo />
      </a>

      <button
        className={`navbar-toggle ${isMenuOpen ? "navbar-toggle--open" : ""}`}
        type="button"
        aria-label="Abrir menú de navegación"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              <a href={link.href} onClick={closeMenu}>
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