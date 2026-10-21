
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// 1. Informations générales de la garderie
const garderie = {
  nom: "Ma Garderie",
  description:
    "Un environnement chaleureux et sécurisé pour accompagner les enfants dans leur développement.",
  adresse: "Tunis, Tunisie",
  telephone: "+216 71 000 000",
  email: "contact@magarderie.tn",
  horaires: {
    ouverture: "07:30",
    fermeture: "18:00",
  },
};

// 2. Liste des services proposés
const services = [
  {
    id: 1,
    nom: "Accueil des enfants",
    description: "Accueil et accompagnement quotidien des enfants.",
    icone: "heart",
  },
  {
    id: 2,
    nom: "Repas équilibrés",
    description: "Des repas adaptés aux besoins des enfants.",
    icone: "utensils",
  },
  {
    id: 3,
    nom: "Aide aux apprentissages",
    description: "Des activités éducatives adaptées à chaque âge.",
    icone: "book-open",
  },
  {
    id: 4,
    nom: "Suivi des enfants",
    description: "Un suivi régulier de leur évolution et de leur bien-être.",
    icone: "users",
  },
];

// 3. Liste des activités proposées
const activites = [
  {
    id: 1,
    nom: "Dessin et peinture",
    description: "Développer la créativité et l'expression artistique.",
    categorie: "Créativité",
  },
  {
    id: 2,
    nom: "Éveil musical",
    description: "Découvrir les sons, les rythmes et les chansons.",
    categorie: "Musique",
  },
  {
    id: 3,
    nom: "Jeux éducatifs",
    description: "Apprendre en jouant et développer la logique.",
    categorie: "Éducation",
  },
  {
    id: 4,
    nom: "Activités sportives",
    description: "Développer la motricité et l'esprit d'équipe.",
    categorie: "Sport",
  },
];

// Route d'accueil pour vérifier que le serveur fonctionne
app.get("/", (req, res) => {
  res.json({
    message: "Bienvenue sur l'API de Ma Garderie",
    statut: "OK",
  });
});

// GET /api/garderie
app.get("/api/garderie", (req, res) => {
  res.status(200).json(garderie);
});

// GET /api/services
app.get("/api/services", (req, res) => {
  res.status(200).json(services);
});

// GET /api/activites
app.get("/api/activites", (req, res) => {
  res.status(200).json(activites);
});

// Démarrage du serveur
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend démarré sur http://localhost:${PORT}`);
  console.log("Routes disponibles :");
  console.log(`  GET http://localhost:${PORT}/api/garderie`);
  console.log(`  GET http://localhost:${PORT}/api/services`);
  console.log(`  GET http://localhost:${PORT}/api/activites`);
});
