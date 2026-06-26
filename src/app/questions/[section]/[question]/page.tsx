"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useGame } from "@/context/gameContext";
import { fases, perguntasPorFase, type FaseId } from "@/lib/questions";

export default function QuestionPage() {
  const router = useRouter();
  const params = useParams();
  const section = String(params.section) as FaseId;
  const question = Number(params.question);
  const fase = fases.find((item) => item.id === section);
  const {
    pontos,
    ganharPonto,
    concluirFase,
    perguntasDaPartida,
    fasesConcluidas,
  } = useGame();
  const [respostaSelecionada, setRespostaSelecionada] = useState<number | null>(
    null
  );

  const perguntas =
    perguntasDaPartida[section] ?? perguntasPorFase[section]?.slice(0, 5);
  const perguntaAtual = perguntas?.[question];

  if (!fase || !perguntas || !perguntaAtual) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#f4f2ec] p-6 text-zinc-950">
        <section className="border-2 border-black bg-white p-8 shadow-[8px_8px_0_#000]">
          <p className="text-xl font-bold">Pergunta não encontrada.</p>
          <Link className="mt-5 inline-block underline" href="/brain">
            Voltar ao mapa
          </Link>
        </section>
      </main>
    );
  }

  const acertou = respostaSelecionada === perguntaAtual.correta;
  const faseFinalizada = question + 1 >= perguntas.length;

  function responder(index: number) {
    if (respostaSelecionada !== null) return;

    setRespostaSelecionada(index);

    if (index === perguntaAtual.correta) {
      ganharPonto();
    }
  }

  function proxima() {
    if (!faseFinalizada) {
      setRespostaSelecionada(null);
      router.push(`/questions/${section}/${question + 1}`);
      return;
    }

    concluirFase(section);

    if (fasesConcluidas.length + 1 >= fases.length) {
      router.push("/congratulations");
      return;
    }

    router.push("/brain");
  }

  return (
    <main className="h-screen overflow-hidden bg-[#f4f2ec] px-5 py-5 text-zinc-950">
      <section className="mx-auto flex h-full max-w-5xl flex-col">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black pb-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-zinc-500">
              {fase.titulo}
            </p>
            <h1 className="mt-2 text-3xl font-black uppercase sm:text-4xl">
              Pergunta {question + 1}
            </h1>
          </div>
          <div className="border-2 border-black bg-white px-5 py-2 text-right shadow-[6px_6px_0_#000]">
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
              Pontuação
            </p>
            <p className="text-3xl font-black">{pontos}</p>
          </div>
        </header>

        <div className="grid min-h-0 flex-1 items-center py-5">
          <article className="border-2 border-black bg-white p-5 shadow-[12px_12px_0_#000] sm:p-7">
            <div className="mb-5 flex gap-2">
              {perguntas.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 flex-1 border border-black ${
                    index <= question ? "bg-black" : "bg-white"
                  }`}
                />
              ))}
            </div>

            <p className="text-xl font-black leading-8 sm:text-2xl">
              {perguntaAtual.pergunta}
            </p>

            <div className="mt-6 grid gap-3">
              {perguntaAtual.opcoes.map((opcao, index) => {
                const correta = index === perguntaAtual.correta;
                const selecionada = index === respostaSelecionada;
                const respondida = respostaSelecionada !== null;

                return (
                  <button
                    key={opcao}
                    onClick={() => responder(index)}
                    disabled={respondida}
                    className={`min-h-14 border-2 px-5 py-3 text-left text-base font-bold transition sm:text-lg ${
                      !respondida
                        ? "border-black bg-white hover:-translate-y-1 hover:bg-black hover:text-white"
                        : correta
                        ? "border-black bg-black text-white"
                        : selecionada
                        ? "border-black bg-white text-zinc-400 line-through"
                        : "border-zinc-300 bg-white text-zinc-400"
                    }`}
                  >
                    <span className="mr-4 font-mono text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {opcao}
                  </button>
                );
              })}
            </div>

            {respostaSelecionada !== null && (
              <div className="mt-5 border-2 border-black bg-[#f4f2ec] p-4">
                <p className="text-xl font-black">
                  {acertou ? "Correto." : "Incorreto."}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-700 sm:text-base">
                  {perguntaAtual.explicacao}
                </p>
                <button
                  onClick={proxima}
                  className="mt-4 border-2 border-black bg-black px-7 py-3 font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
                >
                  {faseFinalizada ? "Finalizar fase" : "Próxima"}
                </button>
              </div>
            )}
          </article>
        </div>

        <footer className="flex flex-wrap justify-between gap-3 border-t-2 border-black pt-4 text-sm uppercase tracking-[0.18em] text-zinc-600">
          <span>
            Progresso da fase: {question + 1}/{perguntas.length}
          </span>
          <span>Perguntas da partida: 25</span>
        </footer>
      </section>
    </main>
  );
}
