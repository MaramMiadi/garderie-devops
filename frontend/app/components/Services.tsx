import type { Service, Activite } from "../../lib/api";

import { getServices, getActivites } from "../../lib/api";

export default async function Services() {
  let services: Service[] = [];
  let activites: Activite[] = [];

  try {
    [services, activites] = await Promise.all([
      getServices(),
      getActivites(),
    ]);
  } catch (error) {
    console.error("Impossible de charger les services et activités :", error);
  }

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
          <article className="service-card" key={service.id}>
            <div className="service-icon" aria-hidden="true">
              {service.icone === "heart" && "💚"}
              {service.icone === "utensils" && "🥗"}
              {service.icone === "book-open" && "📚"}
              {service.icone === "users" && "👨‍👩‍👧"}
            </div>
            <h3>{service.nom}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      <div className="activities-banner" id="activites">
        <span aria-hidden="true">🎨</span>
        <div>
          <h3>Nos activités</h3>
          {activites.length > 0 ? (
            <ul>
              {activites.map((activite) => (
                <li key={activite.id}>
                  <strong>{activite.nom}</strong>
                  {" — "}
                  {activite.description}
                </li>
              ))}
            </ul>
          ) : (
            <p>Nos activités seront bientôt disponibles.</p>
          )}
        </div>
      </div>
    </section>
  );
}
