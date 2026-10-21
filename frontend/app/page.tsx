import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <section className="contact-section" id="contact">
          <h2>Une question sur notre garderie ?</h2>
          <p>Nous serons ravis de vous présenter nos activités.</p>
          <a href="mailto:contact@magarderie.example">Nous contacter</a>
        </section>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Ma Garderie — Grandir ensemble 💚
      </footer>
    </>
  );
}
