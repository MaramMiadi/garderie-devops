import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ma Garderie | Grandir ensemble",
  description: "Un espace chaleureux pour apprendre, jouer et grandir.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
