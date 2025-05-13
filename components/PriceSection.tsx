"use client"

import { motion } from "framer-motion"
import PrimaryButton from "./PrimaryButton"
import SectionTitle from "./SectionTitle"
import { Check, Users, Award, BookOpen, TrendingUp } from "lucide-react"

export default function PriceSection() {
  const achievements = [
    {
      icon: <BookOpen className="text-blue-500" size={20} />,
      value: "15+",
      label: "Anos de experiência",
    },
    {
      icon: <Users className="text-green-500" size={20} />,
      value: "3.000+",
      label: "Alunos aprovados",
    },
    {
      icon: <Award className="text-purple-500" size={20} />,
      value: "33k+",
      label: "Questões analisadas",
    },
    {
      icon: <TrendingUp className="text-amber-500" size={20} />,
      value: "71%",
      label: "Taxa de aprovação",
    },
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="container-width">
        <SectionTitle
          title={
            <>
              Invista na sua aprovação <span className="gradient-text">com quem já foi 5x aprovado</span>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto mb-8">
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden mx-3 sm:mx-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-4 sm:p-6 bg-black text-white">
              {/* Instagram profile image - smaller on mobile */}
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gerson.jpg-A2BBCtp4Q3ba8lsvj95UPzet6SwMbo.jpeg"
                      alt="Gerson Aragão - Método de Aprovação"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-bold text-xs sm:text-sm md:text-lg">gerson_metododeaprovacao</h3>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-300">Gerson Aragão | Concursos</p>
                  </div>
                </div>

                <div className="flex justify-between text-xs mb-4 w-full">
                  <div className="text-center">
                    <div className="font-bold">4.099</div>
                    <div className="text-gray-300 text-[10px] sm:text-xs">publicações</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">309 mil</div>
                    <div className="text-gray-300 text-[10px] sm:text-xs">seguidores</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">441</div>
                    <div className="text-gray-300 text-[10px] sm:text-xs">seguindo</div>
                  </div>
                </div>

                {/* Bullets abaixo da imagem */}
                <div className="space-y-1 sm:space-y-2 text-xs w-full">
                  <p className="text-gray-300">Educação</p>
                  <p className="flex items-center">
                    <Check size={12} className="mr-1 flex-shrink-0" /> Estratégias para aprovação em concursos
                  </p>
                  <p className="flex items-center">
                    <Check size={12} className="mr-1 flex-shrink-0" /> Defensor Público e 5x aprovado
                  </p>
                  <p className="flex items-center">
                    <Users size={12} className="mr-1 flex-shrink-0" /> + de 200 mil alunos em 10 anos
                  </p>
                </div>
              </div>
            </div>

            {/* Estatísticas abaixo do perfil */}
            <div className="p-3 sm:p-4 grid grid-cols-2 gap-2 sm:gap-3">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-2 sm:p-3 rounded-lg flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="mr-2 p-1 bg-white rounded-full shadow-sm">{item.icon}</div>
                  <div>
                    <div className="text-xs sm:text-sm md:text-base font-bold">{item.value}</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 mx-3 sm:mx-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">PRÉ-VENDA:</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold gradient-text">R$ 399</span>
                  <span className="ml-2 bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
                    33% OFF
                  </span>
                </div>
                <p className="text-sm text-gray-700 mt-1">Compre o Vade Mecum digital e ganhe 2 livros físicos...</p>

                {/* Adicionando o texto sobre valor individual dos materiais */}
                <div className="mt-3 p-2 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">
                    Valor individual dos materiais se você pagasse individualmente
                  </p>
                  <p className="text-lg font-serif font-bold text-gray-400 line-through">+ de R$ 997,00</p>
                </div>
              </div>

              <div className="flex-shrink-0">
                <motion.div
                  className="relative w-32 h-40"
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
                </motion.div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-3">O que está incluído:</h3>
              <div className="space-y-2">
                {[
                  "Acesso Vade Mecum 6 meses",
                  "Livro físico Direito Constitucional",
                  "Livro digital Súmulas Grifadas",
                  "Curso completo",
                  "180 dias de atualizações",
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

            <div className="flex items-center mb-6">
              <motion.div
                className="relative w-12 h-12 mr-3"
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
                <p className="font-bold text-sm">GARANTIA DE 7 DIAS</p>
                <p className="text-xs text-gray-600">Satisfação ou seu dinheiro de volta</p>
              </div>
            </div>

            <div>
              <PrimaryButton large className="w-full">
                QUERO GARANTIR MINHA APROVAÇÃO
              </PrimaryButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
