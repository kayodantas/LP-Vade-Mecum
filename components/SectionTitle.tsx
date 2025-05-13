"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

// Modificar a interface para tornar o número opcional
interface SectionTitleProps {
  number?: number // Tornando o número opcional
  title: ReactNode
  className?: string
}

export default function SectionTitle({ number, title, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex items-center justify-center mb-12 ${className}`}>
      <div className="relative">
        {number && ( // Renderiza o número apenas se ele for fornecido
          <motion.span
            className="absolute -left-12 -top-1 w-10 h-10 rounded-full bg-[#2179C4] text-white flex items-center justify-center text-lg font-bold"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {number}
          </motion.span>
        )}
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
      </div>
    </div>
  )
}
