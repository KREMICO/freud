
"use client";

import { createContext, useContext, useState } from "react";

type GameContextType = {
  pontos: number;
  progresso: number;
  faseAtual: string | null;
  setFaseAtual: (fase: string | null) => void;
  ganharPonto: () => void;
  avancarProgresso: () => void;
  resetarJogo: () => void;
};

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [pontos, setPontos] = useState(0);
  const [progresso, setProgresso] = useState(0);
  const [faseAtual, setFaseAtual] = useState<string | null>(null);

  function ganharPonto() {
    setPontos((prev) => prev + 1);
  }

  function avancarProgresso() {
    setProgresso((prev) => prev + 1);
  }

  function resetarJogo() {
    setPontos(0);
    setProgresso(0);
    setFaseAtual(null);
  }

  return (
    <GameContext.Provider
      value={{
        pontos,
        progresso,
        faseAtual,
        setFaseAtual,
        ganharPonto,
        avancarProgresso,
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