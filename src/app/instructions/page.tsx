"use client";

import Link from "next/link";
import { motion } from "motion/react";

const MotionLink = motion.create(Link);

const passos = [
  {
    titulo: "Escolha uma fase",
    texto:
      "No mapa do cérebro, clique em uma das cinco fases: Oral, Anal, Fálica, Latência ou Genital.",
  },
  {
    titulo: "Responda a rodada",
    texto:
      "Cada fase sorteia 5 perguntas de um banco com 15. A ordem muda a cada novo jogo.",
  },
  {
    titulo: "Leia o feedback",
    texto:
      "Após cada resposta, o jogo mostra se você acertou e explica o conceito freudiano envolvido.",
  },
  {
    titulo: "Descubra o cérebro",
    texto:
      "Ao concluir uma fase, a região correspondente do cérebro aparece colorida no mapa.",
  },
  {
    titulo: "Feche o diagnóstico",
    texto:
      "Complete as cinco fases para ver o resultado final, com pontuação total de 25 perguntas.",
  },
];

export default function Instrucoes() {
  return (
    <main className="h-screen overflow-hidden bg-[#f4f2ec] px-5 py-5 text-zinc-950">
      <section className="mx-auto grid h-full max-w-6xl items-center gap-7 lg:grid-cols-[1fr_330px]">
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
          className="border-2 border-black bg-white p-6 shadow-[12px_12px_0_#000] sm:p-8"
        >
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-zinc-500">
            Antes da sessão
          </p>
          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-6xl">
            Instruções
          </h1>

          <div className="mt-6 grid gap-3">
            {passos.map((passo, index) => (
              <motion.div
                key={passo.titulo}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1 + index * 0.07,
                  duration: 0.45,
                  ease: "easeOut",
                }}
                whileHover={{ x: 8, backgroundColor: "#f4f2ec" }}
                className="grid gap-3 border-2 border-black p-4 sm:grid-cols-[56px_1fr]"
              >
                <span className="font-mono text-2xl font-black">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-base font-black uppercase tracking-[0.12em]">
                    {passo.titulo}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-zinc-700 sm:text-base">
                    {passo.texto}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <MotionLink
            href="/"
            whileHover={{ y: -5, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="mt-6 inline-block border-2 border-black bg-black px-7 py-3 font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
          >
            Voltar
          </MotionLink>
        </motion.article>

        <motion.aside
          initial={{ opacity: 0, x: 36, rotate: 1.5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.18, duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
          className="border-2 border-black bg-black p-6 text-white shadow-[10px_10px_0_#000]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-white/60">
            Partida
          </p>
          <p className="mt-5 text-6xl font-black">25</p>
          <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/70">
            perguntas sorteadas
          </p>

          <div className="mt-8 grid grid-cols-5 gap-2">
            {Array.from({ length: 25 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.28 + index * 0.015, duration: 0.25 }}
                className="aspect-square border border-white/50 bg-white/10"
              />
            ))}
          </div>

          <p className="mt-8 border-t border-white/30 pt-5 text-sm leading-6 text-white/75">
            Você pode fazer as fases em qualquer ordem. O mapa marca exatamente
            a região descoberta de cada fase concluída.
          </p>
        </motion.aside>
      </section>
    </main>
  );
}
