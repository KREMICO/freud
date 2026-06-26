"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useGame } from "@/context/gameContext";

const MotionLink = motion.create(Link);

export default function Parabens() {
  const { pontos, totalPerguntas, iniciarJogo } = useGame();
  const percentual = totalPerguntas > 0 ? pontos / totalPerguntas : 0;
  const mereceConfete = pontos >= 20;

  useEffect(() => {
    if (!mereceConfete) return;

    const options = {
      particleCount: 90,
      spread: 68,
      startVelocity: 48,
      scalar: 0.9,
      colors: ["#111111", "#ffffff", "#d6d3cb", "#f3b7b7"],
    };

    confetti({
      ...options,
      angle: 60,
      origin: { x: 0, y: 0.72 },
    });

    confetti({
      ...options,
      angle: 120,
      origin: { x: 1, y: 0.72 },
    });

    const finale = window.setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 92,
        startVelocity: 38,
        origin: { x: 0.5, y: 0.28 },
        colors: options.colors,
      });
    }, 450);

    return () => window.clearTimeout(finale);
  }, [mereceConfete]);

  function mensagem() {
    if (percentual < 0.45) {
      return "Você iniciou a compreensão das fases. Vale revisitar o mapa e consolidar os conceitos centrais.";
    }

    if (percentual < 0.75) {
      return "Bom desempenho. Você reconhece bem a lógica das fases e seus principais conflitos.";
    }

    return "Excelente. Você demonstrou domínio das etapas do desenvolvimento psicossexual em Freud.";
  }

  return (
    <main className="h-screen overflow-hidden bg-[radial-gradient(circle_at_center,#ffffff_0,#f3f3f0_48%,#dedbd2_100%)] px-5 py-5 text-zinc-950">
      <section className="mx-auto grid h-full max-w-6xl items-center gap-7 lg:grid-cols-[1fr_340px]">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="border-2 border-black bg-white p-7 shadow-[14px_14px_0_#000] sm:p-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-zinc-500">
            Relatório final
          </p>
          <h1 className="mt-4 text-5xl font-black uppercase tracking-tight sm:text-7xl">
            Parabéns
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700">
            Você concluiu a jornada pelas cinco fases freudianas.
          </p>

          <motion.div
            initial={{ scale: 0.82, rotate: -2 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.18,
              type: "spring",
              stiffness: 160,
              damping: 16,
            }}
            className="my-7 inline-grid border-2 border-black bg-[#f4f2ec] px-8 py-5"
          >
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">
              Pontuação
            </span>
            <strong className="mt-2 text-6xl font-black">
              {pontos}/{totalPerguntas}
            </strong>
          </motion.div>

          <p className="max-w-3xl text-lg leading-8">{mensagem()}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <MotionLink
              href="/brain"
              onClick={iniciarJogo}
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="border-2 border-black bg-black px-7 py-4 font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              Jogar novamente
            </MotionLink>
            <MotionLink
              href="/"
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="border-2 border-black px-7 py-4 font-bold uppercase tracking-[0.18em] transition hover:-translate-y-1 hover:bg-black hover:text-white"
            >
              Início
            </MotionLink>
          </div>
        </motion.article>

        <motion.aside
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18, duration: 0.58 }}
          className="border-2 border-black bg-black p-6 text-white"
        >
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-white/60">
            Freud
          </p>
          <blockquote className="mt-7 text-2xl font-black leading-tight">
            A mente guarda pistas. O jogo só pediu que você as seguisse.
          </blockquote>
          <motion.div
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.36, duration: 0.6 }}
            className="relative mt-8 aspect-square overflow-hidden border border-white/50"
          >
            <Image
              src="/Final(1).png"
              alt="Cérebro completamente iluminado"
              fill
              sizes="360px"
              className="object-contain drop-shadow-[0_0_24px_rgba(255,220,220,0.45)]"
            />
          </motion.div>
        </motion.aside>
      </section>
    </main>
  );
}
