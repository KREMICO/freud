"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useGame } from "@/context/gameContext";
import { fases, type FaseId } from "@/lib/questions";

const MotionLink = motion.create(Link);

const posicoesPorFase: Record<FaseId, string> = {
  oral: "left-[43.5%] top-[27.8%]",
  anal: "left-[66.6%] top-[33.1%]",
  falica: "left-[72%] top-[53.7%]",
  latencia: "left-[53.9%] top-[62.6%]",
  genital: "left-[30.1%] top-[43%]",
};

const camadasPorFase: Record<FaseId, string> = {
  oral: "/Fase%201.png",
  anal: "/Fase%202.png",
  falica: "/Fase%203.png",
  latencia: "/Fase%204.png",
  genital: "/Fase%205.png",
};

export default function Mapa() {
  const { pontos, progresso, setFaseAtual, fasesConcluidas, totalPerguntas } =
    useGame();
  const completo = fasesConcluidas.length >= fases.length;

  return (
    <main className="h-screen overflow-hidden bg-[#f4f2ec] px-5 py-5 text-zinc-950 sm:px-8">
      <section className="mx-auto flex h-full max-w-[1220px] flex-col">
        <motion.header
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black pb-4"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-zinc-600">
              Mapa clínico
            </p>
            <h1 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-6xl">
              Cérebro de Freud
            </h1>
          </div>

          <div className="grid grid-cols-2 border-2 border-black bg-white text-center shadow-[8px_8px_0_#000]">
            <div className="border-r-2 border-black px-5 py-3">
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                Pontos
              </p>
              <p className="text-3xl font-black">{pontos}</p>
            </div>
            <div className="px-5 py-3">
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                Fases
              </p>
              <p className="text-3xl font-black">{progresso}/5</p>
            </div>
          </div>
        </motion.header>

        <div className="grid min-h-0 flex-1 items-center gap-7 py-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <motion.section
            initial={{ opacity: 0, scale: 0.94, rotate: -0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto aspect-[4/3] w-full max-w-[800px] overflow-hidden border-2 border-black bg-black shadow-[12px_12px_0_#000]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16)_0,rgba(0,0,0,0)_52%)]" />
            <div className="absolute inset-5 border border-white/20" />

            <div className="absolute inset-0">
              <Image
                src="/Cerebro%20fundo.png"
                alt="Cérebro em preto e branco"
                fill
                priority
                sizes="(min-width: 1280px) 860px, (min-width: 1024px) 780px, 95vw"
                className="object-contain opacity-90 grayscale"
              />

              {completo ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                  src="/Final(1).png"
                  alt="Cérebro totalmente iluminado"
                  fill
                  sizes="(min-width: 1280px) 860px, (min-width: 1024px) 780px, 95vw"
                  className="object-contain drop-shadow-[0_0_24px_rgba(255,220,220,0.42)]"
                />
                </motion.div>
              ) : (
                fasesConcluidas.map((faseId) => (
                  <motion.div
                    key={faseId}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={camadasPorFase[faseId]}
                      alt={`Área descoberta da fase ${faseId}`}
                      fill
                      sizes="(min-width: 1280px) 860px, (min-width: 1024px) 780px, 95vw"
                      className="object-contain drop-shadow-[0_0_18px_rgba(255,210,210,0.36)]"
                    />
                  </motion.div>
                ))
              )}
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 border border-white/30 bg-black/70 px-4 py-3 text-white backdrop-blur">
              <div className="h-2 flex-1 border border-white/40">
                <motion.div
                  initial={false}
                  animate={{ width: `${(progresso / fases.length) * 100}%` }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  className="h-full bg-white transition-all duration-700"
                />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                {progresso}/5 descobertos
              </span>
            </div>

            {fases.map((fase) => {
              const concluida = fasesConcluidas.includes(fase.id);

              return (
                <MotionLink
                  key={fase.id}
                  href={concluida ? "#" : `/questions/${fase.id}`}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    scale: concluida ? 1.05 : [1, 1.04, 1],
                  }}
                  transition={{
                    delay: 0.12 + fases.findIndex((item) => item.id === fase.id) * 0.06,
                    duration: concluida ? 0.28 : 2.4,
                    repeat: concluida ? 0 : Infinity,
                    repeatDelay: 1.2,
                  }}
                  whileHover={{ scale: 1.14 }}
                  whileTap={{ scale: 0.94 }}
                  style={{ x: "-50%", y: "-50%" }}
                  onClick={(event) => {
                    if (concluida) {
                      event.preventDefault();
                      return;
                    }

                    setFaseAtual(fase.id);
                  }}
                  className={`absolute z-10 flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 text-center text-[9px] font-black uppercase tracking-[0.06em] sm:h-20 sm:w-20 sm:text-[10px] xl:h-24 xl:w-24 xl:text-xs ${
                    concluida
                      ? "border-white bg-white text-black shadow-[0_0_22px_rgba(255,255,255,0.45)]"
                      : "border-white bg-black/75 text-white hover:scale-110 hover:bg-white hover:text-black"
                  } ${posicoesPorFase[fase.id]}`}
                >
                  <span>{fase.nome}</span>
                  <span className="mt-1 hidden font-mono text-[9px] font-normal tracking-[0.14em] sm:block">
                    {concluida ? "Concluída" : fase.periodo}
                  </span>
                </MotionLink>
              );
            })}
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="border-2 border-black bg-white p-5 shadow-[8px_8px_0_#000]"
          >
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-zinc-500">
              Sessão
            </p>
            <h2 className="mt-3 text-3xl font-black">Escolha uma fase</h2>
            <p className="mt-4 leading-7 text-zinc-700">
              Cada fase traz 5 perguntas sorteadas a partir de um banco de 15.
              Responda todas para liberar o resultado final.
            </p>

            <div className="mt-7 space-y-3">
              {fases.map((fase) => (
                <div
                  key={fase.id}
                  className="flex items-center justify-between border border-black px-4 py-3"
                >
                  <span className="font-bold">{fase.titulo}</span>
                  <span className="font-mono text-xs uppercase tracking-[0.16em]">
                    {fasesConcluidas.includes(fase.id) ? "ok" : "aberta"}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 border-t border-black pt-4 text-sm text-zinc-600">
              Total da partida: {totalPerguntas} perguntas
            </p>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}
