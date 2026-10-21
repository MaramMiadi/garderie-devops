
export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#accueil" aria-label="Ma Garderie, accueil">
        <span className="brand-icon" aria-hidden="true">🌈</span>
        <span>Ma Garderie</span>
      </a>

      <nav aria-label="Navigation principale">
        <a href="#accueil">Accueil</a>
        <a href="#services">Nos services</a>
        <a href="#activites">Activités</a>
        <a className="nav-cta" href="#contact">Nous contacter</a>
      </nav>
    </header>
  );
}
