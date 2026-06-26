"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { fases, type FaseId } from "@/lib/questions";

export default function SectionPage() {
  const params = useParams();
  const section = String(params.section) as FaseId;
  const fase = fases.find((item) => item.id === section);

  if (!fase) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#f4f2ec] p-6 text-zinc-950">
        <section className="border-2 border-black bg-white p-8 shadow-[8px_8px_0_#000]">
          <p className="text-xl font-bold">Fase não encontrada.</p>
          <Link className="mt-5 inline-block underline" href="/brain">
            Voltar ao mapa
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="h-screen overflow-hidden bg-[#f4f2ec] px-5 py-5 text-zinc-950">
      <section className="mx-auto grid h-full max-w-6xl items-center gap-7 lg:grid-cols-[1fr_340px]">
        <article className="border-2 border-black bg-white p-7 shadow-[12px_12px_0_#000] sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-zinc-500">
            {fase.periodo}
          </p>
          <h1 className="mt-4 text-5xl font-black uppercase tracking-tight sm:text-6xl">
            {fase.titulo}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-700">
            {fase.texto}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`/questions/${fase.id}/0`}
              className="border-2 border-black bg-black px-7 py-4 font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              Começar
            </Link>
            <Link
              href="/brain"
              className="border-2 border-black px-7 py-4 font-bold uppercase tracking-[0.18em] transition hover:-translate-y-1 hover:bg-black hover:text-white"
            >
              Mapa
            </Link>
          </div>
        </article>

        <aside className="border-2 border-black bg-black p-6 text-white">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-white/60">
            Rodada
          </p>
          <p className="mt-4 text-5xl font-black">5</p>
          <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/70">
            perguntas sorteadas
          </p>
          <div className="mt-10 h-40 border border-white/50 bg-[repeating-linear-gradient(135deg,#000_0,#000_12px,#222_12px,#222_14px)]" />
        </aside>
      </section>
    </main>
  );
}
