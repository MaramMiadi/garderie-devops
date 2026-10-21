
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { getGarderie } from "../lib/api";

export const dynamic = "force-dynamic";

export default async function Home() {
  let garderie = null;

  try {
    garderie = await getGarderie();
  } catch (error) {
    console.error("Impossible de charger les informations de la garderie :", error);
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero garderie={garderie} />
        <Services />
        <section className="contact-section" id="contact">
          <h2>Une question sur notre garderie ?</h2>
          <p>
            Nous serons ravis de vous présenter nos activités.
          </p>
          <a href="mailto:contact@magarderie.tn">Nous contacter</a>
        </section>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Ma Garderie — Grandir ensemble 💚
      </footer>
    </>
  );
}
