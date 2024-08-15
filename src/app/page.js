import Image from "next/image";
import { Pacifico } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContainerHome } from "@/components/ContainerHome";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400", // Définir le poids de la police, 400 pour normal
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(./image/trois-ilets-ile.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className={pacifico.className + " text-5xl"}>Kay Ti Mo</h1>
            <p className="mb-5 p-4">Trouver vos activités dans le Sud</p>
          </div>
        </div>
      </div>
      <ContainerHome/>
      <Footer />
    </main>
  );
}
