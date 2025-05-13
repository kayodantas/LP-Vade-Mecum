"use client"

import { motion } from "framer-motion"
import SectionTitle from "./SectionTitle"
import { BookOpen, Scale, Brain } from "lucide-react"

export default function StoryIntro() {
  return (
    <section className="w-full bg-[#F4F6FA] section-padding">
      <div className="container-width">
        <SectionTitle
          title={
            <span className="text-black">
              Se você estuda para concursos,
              <br />
              provavelmente enfrenta algumas dessas situações
            </span>
          }
        />

        <div className="grid grid-cols-1 gap-6 mt-8">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                icon: <BookOpen className="text-blue-500" size={24} />,
                title: "Não tem noção da importância da legislação",
                content:
                  "Em concursos que envolvem assuntos jurídicos, a legislação é responsável por até 71% das questões de uma prova, variando de concursos técnicos (com média de 78%) a concursos de carreiras jurídicas (com média de 58%).",
              },
              {
                icon: <Scale className="text-purple-500" size={24} />,
                title: "Não acredita que a legislação é realmente tão importante",
                content:
                  "Em um estudo realizado sob minha coordenação (Gerson Aragão) e da Professora Nathalia Masson (Direito Constitucional), analisamos mais de 33.343 itens de questões de concursos anteriores e concluímos que a maioria delas são, simplesmente, cópias da letra da lei.",
              },
              {
                icon: <Brain className="text-green-500" size={24} />,
                title: "Dificuldade em estudar e revisar",
                content:
                  "Já sabe da importância da legislação em provas, mas tem dificuldade em estudar e revisar a imensa quantidade de artigos exigidos no edital. O pior de tudo é que, mesmo lendo tanto material, você não sabe quais artigos de lei são mais importantes para memorizar e lembrar no momento da prova.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1 p-2 bg-gray-100 rounded-full">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
