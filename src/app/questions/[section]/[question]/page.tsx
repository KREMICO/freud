"use client";

import { useParams, useRouter } from "next/navigation";
import { useGame } from "@/context/gameContext";
import { perguntasPorFase } from "@/lib/questions";


export default function QuestionPage() {
  const router = useRouter();
  const params = useParams();

  // pega da URL
  const sectionRaw = params.section as string;
  const question = Number(params.question);

  const section = sectionRaw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const { pontos, ganharPonto, avancarProgresso, concluirFase } = useGame();

  const perguntas = perguntasPorFase[section];

  if (!perguntas) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white text-black">
        <p>Fase não encontrada: {sectionRaw}</p>
      </main>
    );
  }

  const perguntaAtual = perguntas[question];

  if (!perguntaAtual) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white text-black">
        <p>Pergunta não encontrada. </p>
      </main>
    );
  }

  function responder(indexResposta: number) {
    if (indexResposta === perguntaAtual.correta) {
      ganharPonto();
    }

    if (question + 1 < perguntas.length) {
      router.push(`/questions/${section}/${question + 1}`);
    } else {
      concluirFase(section);
      avancarProgresso();
      router.push("/brain");
    }
  }

  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-between p-8">
      
      <h1 className="text-4xl font-bold">
        {sectionRaw.toUpperCase()}
      </h1>

      <section className="w-full max-w-3xl border-4 border-black p-8 text-center">
        <p className="text-2xl mb-8">
          {perguntaAtual.pergunta}
        </p>

        <div className="flex flex-col gap-4">
          {perguntaAtual.opcoes.map((opcao, index) => (
            <button
              key={index}
              onClick={() => responder(index)}
              className="border-2 border-black py-3 text-xl hover:bg-black hover:text-white transition"
            >
              {opcao}
            </button>
          ))}
        </div>
      </section>

      <footer className="w-full flex justify-between text-xl px-10">
        <p>Pontuação: {pontos}</p>
        <p>
          Progresso: {question + 1}/{perguntas.length}
        </p>
      </footer>

    </main>
  );
}