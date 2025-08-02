import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BuildWell Solutions | Budownictwo i Materiały Budowlane",
  description:
    "Twój zaufany partner w budownictwie, zarządzaniu projektami i dostawie materiałów budowlanych. Oferujemy usługi budowlane dla klientów indywidualnych, komercyjnych i przemysłowych.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        className={`${inter.className} min-h-screen bg-background antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
