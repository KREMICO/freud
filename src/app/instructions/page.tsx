// app/instrucoes/page.tsx

export default function Instrucoes() {
  return (
    <main className="min-h-screen w-full bg-white text-black flex flex-col items-center justify-center p-10">
      <section className="w-full max-w-4xl border-4 border-black p-10 text-center">
        <h1 className="text-5xl font-bold mb-8">Instruções</h1>

        <div className="text-2xl leading-relaxed space-y-4">
          <p>Você entrará na mente humana.</p>
          <p>Cada fase apresenta perguntas sobre o desenvolvimento segundo Freud.</p>
          <p>Escolha a alternativa correta para avançar.</p>
          <p>A cada acerto, você ganha pontos.</p>
          <p>Após responder, o jogo mostra um feedback explicando a resposta.</p>
          <p>Complete as 5 fases para ver sua pontuação final.</p>
        </div>

        <div className="mt-10 flex justify-center gap-8">
          

          <a
            href="/"
            className="border-2 border-black px-10 py-4 text-xl hover:bg-black hover:text-white transition"
          >
            Voltar
          </a>
        </div>
      </section>
    </main>
  );
}