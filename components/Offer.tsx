"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import PrimaryButton from "./PrimaryButton"
import SectionTitle from "./SectionTitle"
import WhatsModal from "./WhatsModal"

const OFFER_BENEFITS = [
  "Acesso Vade Mecum 6 meses",
  "Livro físico Direito Constitucional",
  "Livro digital Súmulas Grifadas",
  "Curso completo",
  "180 dias de atualizações",
  "Frete grátis",
]

export default function Offer() {
  const [open, setOpen] = useState(false)

  return (
    <section className="w-full bg-white section-padding">
      <div className="container-width">
        <SectionTitle
          title={
            <>
              Invista na sua <span className="gradient-text">aprovação</span>
            </>
          }
        />

        <motion.p
          className="text-center text-gray-700 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Acesso completo ao material que já ajudou mais de 3.000 concurseiros a conquistarem sua aprovação
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <motion.div
            className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 0 20px 0 rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-6">
                <div>
                  <p className="text-sm text-gray-500 line-through">De R$ 997,00 por</p>
                  <div className="flex items-end">
                    <span className="text-4xl font-serif font-bold gradient-text">R$ 399</span>
                    <span className="text-lg text-gray-700 ml-1">,00</span>
                  </div>
                  <p className="text-sm text-gray-600">ou 12x de R$ 33,25</p>
                </div>
                <div className="flex-shrink-0">
                  <motion.div
                    className="relative w-40 h-48"
                    whileHover={{
                      rotate: [-2, 2, -2],
                      transition: { duration: 0.5, repeat: Number.POSITIVE_INFINITY },
                    }}
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KuN7D72NcphO8ZDPnRX5W6qfM1sPai.png"
                      alt="Vade Mecum Grifado e Anotado"
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                    <div className="absolute top-0 right-0 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full transform translate-x-2 -translate-y-2">
                      33% OFF
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {OFFER_BENEFITS.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 mt-1 mr-3 text-green-500">
                      <Check size={18} />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>

              <PrimaryButton large className="w-full">
                Quero garantir minha aprovação
              </PrimaryButton>
            </div>

            <div className="p-6 bg-gray-50 border-t">
              <div className="flex items-center justify-center">
                <motion.div
                  className="relative w-16 h-16 mr-4"
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#2179C4" strokeWidth="5" />
                    <path
                      d="M30,50 L45,65 L70,35"
                      fill="none"
                      stroke="#2179C4"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
                <div>
                  <h4 className="font-bold text-lg">Garantia de 7 dias</h4>
                  <p className="text-sm text-gray-600">Satisfação garantida ou seu dinheiro de volta</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <WhatsModal open={open} setOpen={setOpen} />
      </div>
    </section>
  )
}
