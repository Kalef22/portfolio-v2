function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <a href="#inicio" className="logo">
                    KV
                </a>

                <nav>
                    <a href="#about">Sobre mí</a>
                    <a href="#projects">Proyectos</a>
                    <a href="#skills">Tecnologias</a>
                    <a href="#contact">Contacto</a>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
