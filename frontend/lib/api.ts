
const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export interface Garderie {
  nom: string;
  description: string;
  adresse: string;
  telephone: string;
  email: string;
  horaires: {
    ouverture: string;
    fermeture: string;
  };
}

export interface Service {
  id: number;
  nom: string;
  description: string;
  icone: string;
}

export interface Activite {
  id: number;
  nom: string;
  description: string;
  categorie: string;
}

async function fetchApi<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Erreur API ${endpoint}: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const getGarderie = () =>
  fetchApi<Garderie>("/api/garderie");

export const getServices = () =>
  fetchApi<Service[]>("/api/services");

export const getActivites = () =>
  fetchApi<Activite[]>("/api/activites");
