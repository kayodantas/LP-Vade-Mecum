"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import PrimaryButton from "./PrimaryButton"

// Simple countdown component
function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newSeconds = prev.seconds - 1

        if (newSeconds >= 0) {
          return { ...prev, seconds: newSeconds }
        }

        const newMinutes = prev.minutes - 1

        if (newMinutes >= 0) {
          return { ...prev, minutes: newMinutes, seconds: 59 }
        }

        const newHours = prev.hours - 1

        if (newHours >= 0) {
          return { hours: newHours, minutes: 59, seconds: 59 }
        }

        // Reset to 23:59:59 when countdown reaches 0
        return { hours: 23, minutes: 59, seconds: 59 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => time.toString().padStart(2, "0")

  return (
    <div className="flex justify-center gap-4 my-8">
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 w-20 text-center">
        <div className="text-2xl font-bold text-white">{formatTime(timeLeft.hours)}</div>
        <div className="text-xs text-white/80">horas</div>
      </div>
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 w-20 text-center">
        <div className="text-2xl font-bold text-white">{formatTime(timeLeft.minutes)}</div>
        <div className="text-xs text-white/80">minutos</div>
      </div>
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 w-20 text-center">
        <div className="text-2xl font-bold text-white">{formatTime(timeLeft.seconds)}</div>
        <div className="text-xs text-white/80">segundos</div>
      </div>
    </div>
  )
}

export default function FinalCTA() {
  return (
    <section className="w-full relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71] via-[#1FA2FF] to-[#2179C4] z-0" />

      <div className="container-width relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Não perca mais tempo. Sua aprovação está esperando por você.
          </h2>

          <p className="text-white/90 text-lg mb-8">
            Oferta especial por tempo limitado. Garanta já o seu Vade Mecum Grifado com 33% de desconto.
          </p>

          <Countdown />

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <PrimaryButton large className="bg-black border-2 border-black hover:bg-black/90">
                Quero garantir minha aprovação agora
              </PrimaryButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
