"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useGame } from "@/context/gameContext";
import { perguntasPorFase } from "@/lib/questions";

export default function QuestionPage() {
  const router = useRouter();
  const params = useParams();

  const section = String(params.section);
  const question = Number(params.question);

  const {
    pontos,
    progresso,
    ganharPonto,
    avancarProgresso,
    concluirFase,
  } = useGame();

  const [respostaSelecionada, setRespostaSelecionada] = useState<number | null>(
    null
  );

  const perguntas = perguntasPorFase[section];
  const perguntaAtual = perguntas?.[question];

  if (!perguntas || !perguntaAtual) {
    return (
      <main className="min-h-screen bg-white text-black flex items-center justify-center">
        <p>Pergunta não encontrada.</p>
      </main>
    );
  }

  const acertou = respostaSelecionada === perguntaAtual.correta;

  function responder(index: number) {
    if (respostaSelecionada !== null) return;

    setRespostaSelecionada(index);

    if (index === perguntaAtual.correta) {
      ganharPonto();
    }
  }

  function proxima() {
    if (question + 1 < perguntas.length) {
      router.push(`/questions/${section}/${question + 1}`);
    } else {
      concluirFase(section);
      avancarProgresso();

      if (progresso + 1 >= 5) {
        router.push("/parabens");
      } else {
        router.push("/brain");
      }
    }
  }

  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-between p-8">
      <h1 className="text-4xl font-bold">{section.toUpperCase()}</h1>

      <section className="w-full max-w-3xl border-4 border-black p-8 text-center">
        <p className="text-2xl mb-8">{perguntaAtual.pergunta}</p>

        <div className="flex flex-col gap-4">
          {perguntaAtual.opcoes.map((opcao, index) => {
            const correta = index === perguntaAtual.correta;
            const selecionada = index === respostaSelecionada;

            return (
              <button
                key={index}
                onClick={() => responder(index)}
                disabled={respostaSelecionada !== null}
                className={`border-2 py-3 text-xl transition
                  ${
                    respostaSelecionada === null
                      ? "border-black hover:bg-black hover:text-white"
                      : correta
                      ? "border-green-600 bg-green-200 text-green-900"
                      : selecionada
                      ? "border-red-600 bg-red-200 text-red-900"
                      : "border-black opacity-50"
                  }
                `}
              >
                {opcao}
              </button>
            );
          })}
        </div>

        {respostaSelecionada !== null && (
          <div className="mt-8 border-2 border-black p-5">
            <p className="text-2xl font-bold mb-3">
              {acertou ? "Correto!" : "Incorreto!"}
            </p>

            <p className="text-lg mb-5">{perguntaAtual.explicacao}</p>

            <button
              onClick={proxima}
              className="border-2 border-black px-8 py-3 text-xl hover:bg-black hover:text-white transition"
            >
              Próxima
            </button>
          </div>
        )}
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