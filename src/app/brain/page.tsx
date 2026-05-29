"use client";

import { useGame } from "@/context/gameContext";
import Link from "next/link";

const fases = [
  { nome: "Oral", id: "oral" },
  { nome: "Anal", id: "anal" },
  { nome: "Fálica", id: "falica" },
  { nome: "Latência", id: "latencia" },
  { nome: "Genital", id: "genital" },
];

export default function Mapa() {
  const { pontos, progresso, setFaseAtual } = useGame();

  return (
    <main className="min-h-screen w-full bg-white text-black flex flex-col items-center justify-between p-8">
      <h1 className="text-4xl font-bold">Mapa do Cérebro</h1>

      <section className="relative w-[650px] h-[420px] border-4 border-black rounded-[50%] flex items-center justify-center">
        <span className="text-xl">Placeholder do cérebro gigante</span>

        {fases.map((fase, index) => (
          <Link
            key={fase.id}
            href={`/questions/${fase.id}`}
            onClick={() => setFaseAtual(fase.id)}
            className="absolute w-24 h-24 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white transition flex items-center justify-center"
            style={{
              top: `${25 + Math.sin(index * 1.3) * 25}%`,
              left: `${40 + Math.cos(index * 1.3) * 30}%`,
            }}
          >
            {fase.nome}
          </Link>
        ))}
      </section>

      <footer className="w-full flex justify-between text-2xl font-semibold px-16">
        <p>Pontuação: {pontos}</p>
        <p>Progresso: {progresso}/5</p>
      </footer>
    </main>
  );
}