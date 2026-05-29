'use client'

type Props = {
  searchParams?: {
    pontos?: string;
    total?: string;
  };
};

export default function Parabens({ searchParams }: Props) {
  const pontos = Number(searchParams?.pontos ?? 0);
  const total = Number(searchParams?.total ?? 5);

  function mensagem() {
    if (pontos <= 2) {
      return "Você iniciou a compreensão do desenvolvimento humano.";
    }
    if (pontos <= 4) {
      return "Bom desempenho. Você compreende bem os conceitos.";
    }
    return "Excelente. Você demonstrou domínio das fases do desenvolvimento.";
  }

  return (
    <main className="min-h-screen w-full bg-white text-black flex items-center justify-center p-10">
      <section className="w-full max-w-4xl border-4 border-black p-10 text-center flex flex-col items-center">
        
        <h1 className="text-5xl font-bold mb-6">Parabéns</h1>

        <p className="text-2xl mb-8">
          Você concluiu o jogo.
        </p>

        <div className="border-2 border-black px-10 py-6 mb-8 text-2xl">
          Pontuação: {pontos}/{total}
        </div>

        <p className="text-xl mb-10 max-w-2xl">
          {mensagem()}
        </p>

        <div className="flex gap-8">
          <a
            href="/"
            className="border-2 border-black px-10 py-4 text-xl hover:bg-black hover:text-white transition"
          >
            Jogar novamente
          </a>

          <a
            href="/brain"
            className="border-2 border-black px-10 py-4 text-xl hover:bg-black hover:text-white transition"
          >
            Voltar ao mapa
          </a>
        </div>

      </section>
    </main>
  );
}