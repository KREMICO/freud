'use client'

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const fases = {
  oral: {
    titulo: "Fase Oral",
    texto:
      "A fase oral é a primeira fase do desenvolvimento. Nela, a boca é a principal forma de contato da criança com o mundo.",
  },
  anal: {
    titulo: "Fase Anal",
    texto:
      "A fase anal está ligada ao controle corporal, disciplina e organização.",
  },
  falica: {
    titulo: "Fase Fálica",
    texto:
      "A fase fálica envolve maior percepção do próprio corpo e início da construção da identidade.",
  },
  latencia: {
    titulo: "Fase de Latência",
    texto:
      "A fase de latência é marcada pelo foco nos estudos, amizades e socialização.",
  },
  genital: {
    titulo: "Fase Genital",
    texto:
      "A fase genital representa uma etapa de maior maturidade emocional e desenvolvimento adulto.",
  },
};

type Props = {
  params: {
    section: string;
  };
};



export default function SectionPage() {
    const router = useRouter();
    const params = useParams();
  const fase = fases[params.section as keyof typeof fases];

  if (!fase) {
    return (
      <main className="min-h-screen bg-white text-black flex items-center justify-center">
        <p>Fase não encontrada.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center p-8">
      <section className="w-full max-w-4xl border-4 border-black p-10 text-center">
        <h1 className="text-5xl font-bold mb-8">{fase.titulo}</h1>

        <p className="text-2xl leading-relaxed mb-10">
          {fase.texto}
        </p>

        <div className="flex justify-center gap-8">
          <Link
            href={`/questions/${params.section}/0`}
            className="border-2 border-black px-10 py-4 text-xl hover:bg-black hover:text-white transition"
          >
            Começar perguntas
          </Link>

          <Link
            href="/brain"
            className="border-2 border-black px-10 py-4 text-xl hover:bg-black hover:text-white transition"
          >
            Voltar ao mapa
          </Link>
        </div>
      </section>
    </main>
  );
}