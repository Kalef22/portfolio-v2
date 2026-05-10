function Navbar() {
    return (
        <header className="navbar">
                <a href="#hero" className="navbar-logo">
                    KV
                </a>

                <nav>
                    <ul className="navbar-links">
                        <li><a href="#about">Sobre mí</a></li>
                        <li><a href="#projects">Proyectos</a></li>
                        <li><a href="#skills">Tecnologias</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
        </header>
    );
}

export default Navbar;
