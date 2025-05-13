"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AlertTriangle, Clock, TrendingDown } from "lucide-react"
import SectionTitle from "./SectionTitle"

const PAIN_POINTS = [
  {
    title: "Erra muitas questões",
    description:
      "Você estuda com aulas, PDFs e materiais, mas, na hora de resolver as questões, parece que não sabe nada e acaba errando muito.",
    icon: "alert-triangle",
  },
  {
    title: "Estagnado entre 40% e 60% de acertos",
    description: "Por mais que você leia os materiais dos cursos, fica estagnado(a) em um percentual de acertos.",
    icon: "trending-down",
  },
  {
    title: "Não passa da 1ª fase do concurso",
    description: "Por fim, nunca alcança as fases seguintes do concurso por não atingir a nota de corte.",
    icon: "clock",
  },
]

const iconComponents = {
  "alert-triangle": AlertTriangle,
  clock: Clock,
  "trending-down": TrendingDown,
}

export default function PainPoints() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="w-full bg-white section-padding">
      <div className="container-width">
        <SectionTitle
          title={
            <>
              Você se identifica com algum desses <span className="gradient-text">problemas</span>?
            </>
          }
        />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {PAIN_POINTS.map((point, index) => {
            const Icon = iconComponents[point.icon as keyof typeof iconComponents]

            return (
              <motion.div
                key={index}
                className="glass-card rounded-xl p-6 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 gradient-primary" />
                <div className="mb-4 text-red-500">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{point.title}</h3>
                <p className="text-gray-700">{point.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
