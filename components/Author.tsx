"use client"

import { motion } from "framer-motion"
import SectionTitle from "./SectionTitle"
import { BookOpen, Users, Award, TrendingUp } from "lucide-react"

export default function Author() {
  const achievements = [
    {
      icon: <BookOpen className="text-blue-500" size={24} />,
      value: "15+",
      label: "Anos de experiência",
    },
    {
      icon: <Users className="text-green-500" size={24} />,
      value: "3.000+",
      label: "Alunos aprovados",
    },
    {
      icon: <Award className="text-purple-500" size={24} />,
      value: "33k+",
      label: "Questões analisadas",
    },
    {
      icon: <TrendingUp className="text-amber-500" size={24} />,
      value: "71%",
      label: "Taxa de aprovação",
    },
  ]

  return (
    <section className="w-full bg-[#F4F6FA] section-padding">
      <div className="container-width">
        <SectionTitle
          title={
            <>
              Conheça o <span className="gradient-text">Autor</span>
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-serif font-bold mb-6">Gerson Aragão</h3>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg flex items-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="mr-3 p-2 bg-white rounded-full shadow-sm">{item.icon}</div>
                    <div>
                      <div className="text-xl font-bold">{item.value}</div>
                      <div className="text-xs text-gray-600">{item.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4 text-gray-700">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  Advogado, professor e especialista em concursos públicos, Gerson Aragão é reconhecido nacionalmente
                  por seu método inovador de estudo da legislação.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  Com mais de 15 anos de experiência no ensino jurídico, desenvolveu o "Método de Aprovação" após
                  analisar mais de 33.000 questões de concursos, identificando padrões e estratégias das principais
                  bancas examinadoras.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  Formado em Direito pela Universidade Federal, com especialização em Direito Constitucional e Direito
                  Administrativo, é responsável pela aprovação de mais de 3.000 alunos em concursos de alto nível.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  Coordenou, junto com a Professora Nathalia Masson, o estudo que comprovou que 71% das questões de
                  concursos são cópias literais da legislação, revolucionando a forma como os candidatos estudam para as
                  provas.
                </motion.p>
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-lg h-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center h-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gerson.jpg-A2BBCtp4Q3ba8lsvj95UPzet6SwMbo.jpeg"
                  alt="Gerson Aragão"
                  className="w-full h-auto object-cover object-center"
                  style={{ maxHeight: "100%" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
