
const services = [
  {
    icon: "📚",
    title: "Éveil éducatif",
    description:
      "Des activités adaptées à chaque âge pour apprendre en s'amusant.",
  },
  {
    icon: "🥗",
    title: "Repas équilibrés",
    description:
      "Des repas variés pour accompagner la croissance et le bien-être.",
  },
  {
    icon: "🎨",
    title: "Activités créatives",
    description:
      "Dessin, musique et jeux pour exprimer son imagination.",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <span className="eyebrow">Nos engagements</span>
        <h2>Grandir en toute confiance</h2>
        <p>
          Des expériences enrichissantes dans un environnement
          rassurant, ludique et adapté aux enfants.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon" aria-hidden="true">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      <div className="activities-banner" id="activites">
        <span aria-hidden="true">🎵</span>
        <div>
          <h3>Des activités chaque jour</h3>
          <p>
            Jeux éducatifs, éveil musical, peinture et découvertes
            pour stimuler la curiosité des enfants.
          </p>
        </div>
      </div>
    </section>
  );
}
