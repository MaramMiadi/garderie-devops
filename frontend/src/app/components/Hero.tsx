
export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-content">
        <span className="eyebrow">🌼 Grandir, apprendre, s'épanouir</span>

        <h1>
          Bienvenue chez <span>Ma Garderie</span>
        </h1>

        <p>
          Un univers chaleureux et bienveillant où chaque enfant découvre,
          apprend et grandit à son rythme, entouré d'une équipe attentive.
        </p>

        <a className="primary-button" href="#services">
          Découvrir nos services →
        </a>

        <div className="hero-note">
          <span aria-hidden="true">💚</span>
          Un cadre accueillant pour les petits explorateurs
        </div>
      </div>

      <div className="hero-visual" role="img"
        aria-label="Illustration colorée d'un espace de jeux pour enfants">
        <div className="hero-illustration">
          <span className="sun">☀️</span>
          <span className="rainbow">🌈</span>
          <span className="blocks">🧸 🧩 🎨</span>
          <span className="flowers">🌷 🌼 🌱</span>
        </div>
        <div className="floating-card">
          <span>⭐</span>
          <div>
            <strong>Chaque jour compte</strong>
            <small>De belles découvertes ensemble</small>
          </div>
        </div>
      </div>
    </section>
  );
}
