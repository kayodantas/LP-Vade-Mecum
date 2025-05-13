"use client"

import { motion } from "framer-motion"
import SectionTitle from "./SectionTitle"
import { Sparkles, CheckCircle2 } from "lucide-react"

export default function WhatYouGet() {
  const features = [
    {
      title: "Grifos nas palavras-chave",
      description:
        'Grifamos os termos relevantes que foram exigidos em provas de concurso. Essas palavras, como podem passar despercebidas, foram selecionadas para chamar a atenção do candidato, para que ele não incorra em erro. Assim, ao estudar os artigos da Constituição, o aluno saberá rapidamente o que é importante e onde estão as "pegadinhas de concurso".',
      image: "/images/page-example-1.jpeg",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Estatísticas de cobrança",
      description:
        "Para saber o que priorizar, incluímos logo abaixo dos artigos ou incisos o número de vezes em que aquele dispositivo foi cobrado em concursos, bem como a indicação dos principais concursos que cobraram a sua literalidade. Assim, o aluno saberá o que priorizar ou dar mais atenção no momento de estudo da Constituição ou durante a revisão.",
      image: "/images/page-example-2.jpeg",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Notas das bancas",
      description:
        "Em quase 1 ano de trabalho, colocamos abaixo de cada artigo ou inciso, notas do que foi cobrado em concursos além da literalidade da Constituição Federal. Assim, o candidato saberá rapidamente tudo que foi cobrado acerca daquele dispositivo — artigo ou inciso — nos últimos 5 a 10 anos.",
      image: "/images/page-example-3.jpeg",
      color: "from-green-500 to-green-600",
    },
  ]

  const products = [
    {
      title: "Acesso Vade Mecum 6 meses",
      description: "Acesso digital completo ao Vade Mecum Grifado e Anotado pelas Bancas de Concurso",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/livro-dVVnCNysjH8yCyKfbFVC6oFZC5VR5I.png",
    },
    {
      title: "Livro físico Direito Constitucional",
      description: "Direito Constitucional Grifado e Anotado pelas Bancas de Concurso",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/constitucional-preview-ATq7SmDGxXRc5DrvK6JijkieZZXFOL.png",
    },
    {
      title: "Livro digital Súmulas Grifadas",
      description: "Súmulas do STF e STJ Grifadas e Anotadas pelas Bancas de Concurso",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stf-H5KlSTH2HbHk6TGxVpFM5c9ycg5OsT.png",
    },
    {
      title: "Curso completo + 180 dias de atualizações",
      description: "Acesso ao curso completo com videoaulas e materiais complementares, com atualizações por 6 meses",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dc3gOEUCEAtxTwk6QG1YFhmqBOyxhX.png",
    },
  ]

  return (
    <section className="w-full bg-white section-padding">
      <div className="container-width">
        <SectionTitle
          title={
            <>
              O que torna o <span className="gradient-text">Vade Mecum Grifado</span> único
            </>
          }
        />

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${feature.color} opacity-5 rounded-3xl -z-10`}
              ></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={`order-2 md:order-${index % 2 === 0 ? 1 : 2}`}>
                  <div className="relative">
                    <div
                      className={`absolute -left-3 -top-3 w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white`}
                    >
                      <Sparkles size={20} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4 pl-10">{feature.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{feature.description}</p>

                  <motion.div
                    className="flex items-center text-sm text-gray-600 font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <CheckCircle2 size={16} className="mr-2 text-green-500" />
                    Comprovadamente eficaz para aprovação em concursos
                  </motion.div>
                </div>

                <div className={`order-1 md:order-${index % 2 === 0 ? 2 : 1}`}>
                  <motion.div
                    className="rounded-xl overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-[400px] overflow-hidden">
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                        style={{
                          objectPosition: index === 0 ? "center 30%" : index === 1 ? "center 40%" : "center 40%",
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-24 p-8 bg-[#F4F6FA] rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold ml-4">O que você vai receber</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="p-4 flex items-center justify-center h-40 bg-gray-50">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">{product.title}</h4>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
