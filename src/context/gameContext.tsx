"use client";

import { createContext, useContext, useEffect, useState } from "react";

type GameContextType = {
  pontos: number;
  progresso: number;
  faseAtual: string | null;
  fasesConcluidas: string[];

  setFaseAtual: (fase: string | null) => void;
  ganharPonto: () => void;
  avancarProgresso: () => void;
  concluirFase: (fase: string) => void;
  resetarJogo: () => void;
};

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [pontos, setPontos] = useState(0);
  const [progresso, setProgresso] = useState(0);
  const [faseAtual, setFaseAtual] = useState<string | null>(null);
  const [fasesConcluidas, setFasesConcluidas] = useState<string[]>([]);

  // 🔥 CARREGAR do localStorage
  useEffect(() => {
    const data = localStorage.getItem("game");

    if (data) {
      const parsed = JSON.parse(data);

      setPontos(parsed.pontos || 0);
      setProgresso(parsed.progresso || 0);
      setFaseAtual(parsed.faseAtual || null);
      setFasesConcluidas(parsed.fasesConcluidas || []);
    }
  }, []);

  // 🔥 SALVAR no localStorage
  useEffect(() => {
    localStorage.setItem(
      "game",
      JSON.stringify({
        pontos,
        progresso,
        faseAtual,
        fasesConcluidas,
      })
    );
  }, [pontos, progresso, faseAtual, fasesConcluidas]);

  function ganharPonto() {
    setPontos((prev) => prev + 1);
  }

  function avancarProgresso() {
    setProgresso((prev) => prev + 1);
  }

  function concluirFase(fase: string) {
    setFasesConcluidas((prev) =>
      prev.includes(fase) ? prev : [...prev, fase]
    );
  }

  function resetarJogo() {
    setPontos(0);
    setProgresso(0);
    setFaseAtual(null);
    setFasesConcluidas([]);

    localStorage.removeItem("game");
  }

  return (
    <GameContext.Provider
      value={{
        pontos,
        progresso,
        faseAtual,
        fasesConcluidas,
        setFaseAtual,
        ganharPonto,
        avancarProgresso,
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