
import type { Garderie } from "../../lib/api";

type HeroProps = {
  garderie: Garderie | null;
};

export default function Hero({ garderie }: HeroProps) {
  const nom = garderie?.nom || "Ma Garderie";
  const description =
    garderie?.description ||
    "Un univers chaleureux et bienveillant où chaque enfant découvre, apprend et grandit à son rythme.";

  return (
    <section className="hero" id="accueil">
      <div className="hero-content">
        <span className="eyebrow">
          🌼 Grandir, apprendre, s'épanouir
        </span>

        <h1>
          Bienvenue chez <span>{nom}</span>
        </h1>

        <p>{description}</p>

        <a className="primary-button" href="#services">
          Découvrir nos services →
        </a>

        {garderie && (
          <p className="hero-contact">
            📍 {garderie.adresse} · 📞 {garderie.telephone}
          </p>
        )}
      </div>

      <div
        className="hero-visual"
        role="img"
        aria-label="Illustration colorée d'un espace de jeux pour enfants"
      >
        <div className="hero-illustration">
          <span className="sun">☀️</span>
          <span className="rainbow">🌈</span>
          <span className="blocks">🧸 🧩 🎨</span>
          <span className="flowers">🌷 🌼 🌱</span>
        </div>

        <div className="floating-card">
          <span aria-hidden="true">💚</span>
          Un cadre accueillant pour les petits explorateurs
        </div>
      </div>
    </section>
  );
}
