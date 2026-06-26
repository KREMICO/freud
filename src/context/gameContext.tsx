"use client";

import { createContext, useContext, useMemo, useState } from "react";
import {
  criarPerguntasDaPartida,
  type FaseId,
  type PerguntasDaPartida,
} from "@/lib/questions";

type GameContextType = {
  pontos: number;
  progresso: number;
  faseAtual: FaseId | null;
  fasesConcluidas: FaseId[];
  perguntasDaPartida: PerguntasDaPartida;
  totalPerguntas: number;
  setFaseAtual: (fase: FaseId | null) => void;
  iniciarJogo: () => void;
  ganharPonto: () => void;
  concluirFase: (fase: FaseId) => void;
  resetarJogo: () => void;
};

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [pontos, setPontos] = useState(0);
  const [faseAtual, setFaseAtual] = useState<FaseId | null>(null);
  const [fasesConcluidas, setFasesConcluidas] = useState<FaseId[]>([]);
  const [perguntasDaPartida, setPerguntasDaPartida] =
    useState<PerguntasDaPartida>(() => criarPerguntasDaPartida());
  const progresso = fasesConcluidas.length;

  const totalPerguntas = useMemo(
    () =>
      Object.values(perguntasDaPartida).reduce(
        (total, perguntas) => total + perguntas.length,
        0
      ),
    [perguntasDaPartida]
  );

  function iniciarJogo() {
    setPontos(0);
    setFaseAtual(null);
    setFasesConcluidas([]);
    setPerguntasDaPartida(criarPerguntasDaPartida());
  }

  function ganharPonto() {
    setPontos((prev) => prev + 1);
  }

  function concluirFase(fase: FaseId) {
    setFasesConcluidas((prev) =>
      prev.includes(fase) ? prev : [...prev, fase]
    );
  }

  function resetarJogo() {
    iniciarJogo();
  }

  return (
    <GameContext.Provider
      value={{
        pontos,
        progresso,
        faseAtual,
        fasesConcluidas,
        perguntasDaPartida,
        totalPerguntas,
        setFaseAtual,
        iniciarJogo,
        ganharPonto,
        concluirFase,
        resetarJogo,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useGame precisa estar dentro do GameProvider");
  }

  return context;
}
