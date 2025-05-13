"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const pandaVideoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load PandaVideo script
    const script = document.createElement("script")
    script.innerHTML = `
      if(!document.querySelector('script[src^="https://player.pandavideo.com.br/api.v2.js"]')){
        let s=document.createElement('script');
        s.src='https://player.pandavideo.com.br/api.v2.js';
        s.async=true;
        document.head.appendChild(s);
      }
      window.pandascripttag=window.pandascripttag||[];
      window.pandascripttag.push(function(){
        const p=new PandaPlayer('610e9e99-898b-4b86-8b8a-3358f4159b9d',{
          library_id:'vz-f90b6bf6-020',
          video_id:'610e9e99-898b-4b86-8b8a-3358f4159b9d',
          external_id: '610e9e99-898b-4b86-8b8a-3358f4159b9d',
          defaultStyle:true
        });
      });
    `

    if (pandaVideoRef.current) {
      pandaVideoRef.current.appendChild(script)
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-[#F4F6FA] min-h-[80vh] flex items-center justify-center pt-8 md:pt-12">
      <div className="container-width section-padding relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Versão Mobile (3 linhas) - visível apenas em telas pequenas */}
          <motion.h1
            className="block md:hidden text-3xl xs:text-4xl font-serif font-bold leading-tight mb-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ lineHeight: "1.2" }}
          >
            <span className="block w-full">Todos os livros</span>
            <span className="block w-full gradient-text">Grifados e Anotados</span>
            <span className="block w-full">pelas bancas em um material só</span>
          </motion.h1>

          {/* Versão Desktop (2 linhas) - visível apenas em telas médias e maiores */}
          <motion.h1
            className="hidden md:block md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ lineHeight: "1.2", maxWidth: "3xl" }}
          >
            <span className="block">
              Todos os livros <span className="gradient-text">Grifados e Anotados</span>
            </span>
            <span className="block mt-2">pelas bancas em um material só</span>
          </motion.h1>

          {/* Subheadline - versão mobile com 2 linhas e desktop normal */}
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="md:hidden block" style={{ fontSize: "16px", lineHeight: "1.4" }}>
              <span className="block">Ultrapasse 70% de acertos com o</span>
              <span className="block">Vade Mecum Grifado e Anotado Pelas Bancas de Concurso.</span>
            </span>
            <span className="hidden md:inline">
              Ultrapasse 70% de acertos com o Vade Mecum Grifado e Anotado Pelas Bancas de Concurso.
            </span>
          </motion.p>

          {/* VSL Video */}
          <motion.div
            className="w-full max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <motion.div
                className="absolute inset-0 border-2 rounded-xl"
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  borderColor: ["#2179C4", "#1FA2FF", "#2ECC71", "#2179C4"],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <div id="610e9e99-898b-4b86-8b8a-3358f4159b9d" ref={pandaVideoRef} className="w-full h-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
