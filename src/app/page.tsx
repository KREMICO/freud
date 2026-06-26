"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useGame } from "@/context/gameContext";

const MotionLink = motion.create(Link);

export default function Home() {
  const { iniciarJogo } = useGame();

  return (
    <main className="h-screen overflow-hidden bg-[radial-gradient(circle_at_center,#ffffff_0,#f3f3f0_42%,#e3e0d8_100%)] text-zinc-950">
      <section className="mx-auto flex h-full w-full max-w-6xl flex-col px-6 py-5 sm:px-10">
        <motion.header
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex items-center justify-between border-b border-black/30 pb-4 text-xs uppercase tracking-[0.32em]"
        >
          <span>Freud</span>
          <span>Psicossexualidade</span>
        </motion.header>

        <div className="grid flex-1 items-center gap-7 py-6 lg:grid-cols-[1fr_390px]">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.55 }}
              className="mb-4 font-mono text-sm uppercase tracking-[0.35em] text-zinc-600"
            >
              Jogo de revisão
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl text-5xl font-black leading-[0.92] sm:text-7xl lg:text-8xl"
            >
              Explorando a Mente de Freud
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.6 }}
              className="mt-6 max-w-2xl text-base leading-7 text-zinc-700 sm:text-lg"
            >
              Atravesse as cinco fases, responda perguntas sorteadas e acompanhe
              sua pontuação em uma experiência minimalista em preto e branco.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.55 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <MotionLink
                href="/brain"
                onClick={iniciarJogo}
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="border-2 border-black bg-black px-8 py-4 text-base font-bold uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                Jogar
              </MotionLink>
              <MotionLink
                href="/instructions"
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="border-2 border-black px-8 py-4 text-base font-bold uppercase tracking-[0.22em] transition hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                Instruções
              </MotionLink>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 2.5, x: 42 }}
            animate={{ opacity: 1, rotate: 0, x: 0 }}
            transition={{ delay: 0.16, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: -1.2, scale: 1.02 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-[390px] overflow-hidden border-2 border-black bg-black shadow-[14px_14px_0_#000]"
          >
            <Image
              src="/freud.png"
              alt="Ilustração em preto e branco de Sigmund Freud"
              fill
              priority
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover object-[53%_48%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_62%,rgba(0,0,0,0.76)_100%)]" />
            <div className="absolute left-5 top-5 h-20 w-20 border-l-2 border-t-2 border-white/70" />
            <div className="absolute bottom-5 right-5 h-20 w-20 border-b-2 border-r-2 border-white/70" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
