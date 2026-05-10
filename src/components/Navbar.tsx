function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#inicio" className="logo">
          KV
        </a>

        <nav>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;