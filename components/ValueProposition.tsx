"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"

export default function ValueProposition() {
  return (
    <section className="w-full bg-white py-12">
      <div className="container-width px-4 max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 leading-tight">
            <span className="block">
              E se você tivesse toda coleção <span className="gradient-text">Grifada e Anotada</span>
            </span>
            <span className="block mt-2">pelas bancas de concurso em um só lugar?</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            A coleção completa que vai transformar sua forma de estudar para concursos
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {/* Imagem da coleção */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/colecao-completa.jpeg"
                alt="Coleção completa Vade Mecum Grifado"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Box de informações */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <div className="mb-4">
                <h3 className="font-bold text-gray-800 mb-3">O que está incluído:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
                  {[
                    "Coleção completa Vade Mecum Grifado",
                    "Livro físico de Direito Constitucional",
                    "Acesso ao curso completo",
                    "6 meses de atualizações",
                    "Bônus: Súmulas Grifadas do STF e STJ",
                    "Frete grátis para todo Brasil",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="text-center text-sm text-gray-600 font-medium">
                Continue lendo para descobrir como este material pode transformar seus estudos
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
