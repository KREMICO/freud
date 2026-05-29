'use client'

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white flex items-center justify-center">
      
      <section className="w-full h-screen border-[4px] border-black flex flex-col items-center justify-center text-center p-8 text-black">
        
        <h1 className="text-5xl font- leading-tight mb-8">
          Explorando a <br /> Mente de Freud
        </h1>

        
        <div className="w-40 h-40 border-2 border-black rounded-full flex items-center justify-center mb-10">
          <span className="text-sm">Imagem</span>
        </div>

        
        <div className="flex gap-10">
          <Link href={'/brain'} className="border-2 border-black px-10 py-4 text-lg hover:bg-black hover:text-white transition">
            Jogar
          </Link>

          <Link href={'/instructions'} className="border-2 border-black px-10 py-4 text-lg hover:bg-black hover:text-white transition">
            Instruções
          </Link>
        </div>

      </section>

    </main>
  );
}