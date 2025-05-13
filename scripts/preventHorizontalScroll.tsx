"use client"

import { useEffect } from "react"

export default function PreventHorizontalScroll() {
  useEffect(() => {
    // Função para prevenir scroll horizontal
    const preventHorizontalScroll = () => {
      // Se o scroll horizontal ocorrer, força o scrollLeft para 0
      if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY)
      }
    }

    // Adiciona o listener para o evento de scroll
    window.addEventListener("scroll", preventHorizontalScroll)

    // Também verifica e corrige o tamanho da viewport em dispositivos móveis
    const fixViewport = () => {
      // Alguns dispositivos móveis têm problemas com a largura da viewport
      const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      document.documentElement.style.width = `${viewportWidth}px`
    }

    // Executa a correção da viewport no carregamento e no resize
    fixViewport()
    window.addEventListener("resize", fixViewport)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", preventHorizontalScroll)
      window.removeEventListener("resize", fixViewport)
    }
  }, [])

  return null
}
