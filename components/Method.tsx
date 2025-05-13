"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import CountUp from "react-countup"
import SectionTitle from "./SectionTitle"
import { BookOpen, FileQuestion, Highlighter, RefreshCw } from "lucide-react"

const METHOD_STEPS = [
  {
    title: "Leitura inicial da legislação",
    description: "Faça uma leitura inicial rápida da lei, apenas para se situar em relação ao conteúdo.",
    icon: <BookOpen className="text-white" size={24} />,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Resolver questões",
    description:
      "Resolva questões sobre a lei estudada e analise item por item, compreendendo os motivos dos acertos e dos erros.",
    icon: <FileQuestion className="text-white" size={24} />,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Grifar na lei o que foi cobrado",
    description: "Grife os artigos de lei que foram cobrados nas questões.",
    icon: <Highlighter className="text-white" size={24} />,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Revisão e técnicas",
    description:
      "Revise constantemente os grifos e utilize técnicas de análise para identificar possíveis cobranças futuras.",
    icon: <RefreshCw className="text-white" size={24} />,
    color: "from-amber-500 to-amber-600",
  },
]

export default function Method() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="w-full bg-[#F4F6FA] section-padding" ref={containerRef}>
      <div className="container-width">
        <SectionTitle
          title={
            <>
              O <span className="gradient-text">Método Comprovado</span> em 4 passos
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              className="mb-8 bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-serif font-bold mb-4">Mas por que isso ocorre?</h3>

              <div className="relative mb-8">
                <div className="absolute left-0 top-0 w-1 h-full bg-gray-200 rounded-full">
                  <motion.div
                    className="absolute left-0 top-0 w-full rounded-full gradient-primary"
                    style={{ height: progressHeight }}
                  />
                </div>

                <div className="ml-6 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-gray-700 mb-4">O grande problema é que as pessoas estudam da seguinte forma:</p>

                    <div className="space-y-4">
                      {[
                        {
                          title: "Assistir a aulas",
                          description:
                            "É comum que todo estudante queira assistir a todas as aulas do curso em sequência.",
                        },
                        {
                          title: "Ler PDFs e livros",
                          description:
                            "Depois, acompanha o que assistiu na aula pelo material, acreditando que tudo está ali.",
                        },
                        {
                          title: "Resolver questões",
                          description:
                            "Logo após, resolve as questões, muitas vezes indicadas no próprio material, o que dá uma sensação de aprendizado.",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <span className="text-blue-600 font-bold">{index + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-bold">{item.title}</h4>
                            <p className="text-gray-700">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <p className="text-gray-700">
                      Esse roteiro dá uma falsa segurança ao concurseiro, que organiza seus horários de estudo dividindo
                      seu tempo disponível entre aulas, materiais e questões.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <p className="text-gray-700 font-medium">Mas, quando vai para a vida real dos concursos:</p>
                    <div className="mt-2 space-y-2">
                      {[
                        "Erra muitas questões",
                        "Fica estagnado nos 60% de acertos",
                        "Não passa na primeira fase de um concurso",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                          <p className="text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <p className="text-gray-700">
                      Isso ocorre porque a maioria das questões, como expliquei acima, são cópias da legislação. Por
                      isso, seus horários de estudo e organização deveriam levar isso em consideração.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <div className="space-y-6">
              {METHOD_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div
                    className={`bg-gradient-to-r ${step.color} p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105`}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          {step.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold mb-2 text-white">
                          {index + 1}. {step.title}
                        </h3>
                        <p className="text-white/90">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="text-lg font-serif font-bold mb-4">Resultados comprovados:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Taxa de aprovação</p>
                  <div className="text-3xl font-bold gradient-text">
                    <CountUp end={78} suffix="%" duration={2.5} />
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Redução no tempo de estudo</p>
                  <div className="text-3xl font-bold gradient-text">
                    <CountUp end={42} suffix="%" duration={2.5} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
