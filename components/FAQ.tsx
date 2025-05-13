"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import SectionTitle from "./SectionTitle"

const FAQ_ITEMS = [
  {
    question: "Quanto tempo leva para receber o material físico?",
    answer:
      "O material físico é enviado em até 3 dias úteis após a confirmação do pagamento. O prazo de entrega varia de acordo com a região, sendo em média de 5 a 10 dias úteis.",
  },
  {
    question: "O material digital é atualizado com que frequência?",
    answer:
      "O material digital é atualizado mensalmente com novas súmulas, jurisprudências e alterações legislativas. Você receberá notificações por e-mail sempre que houver atualizações disponíveis.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer:
      "Se você não ficar satisfeito com o material por qualquer motivo, basta solicitar o reembolso em até 7 dias após o recebimento do produto físico ou acesso ao material digital, o que ocorrer primeiro.",
  },
  {
    question: "O material é adequado para qual nível de concursos?",
    answer:
      "O Vade Mecum Grifado é ideal para concursos de nível médio e superior que exigem conhecimentos em legislação, especialmente nas áreas jurídica, fiscal, administrativa e policial.",
  },
  {
    question: "Posso compartilhar o acesso digital com outras pessoas?",
    answer:
      "Não. O acesso digital é pessoal e intransferível, vinculado ao seu CPF e e-mail. Compartilhar o acesso viola os termos de uso e pode resultar no cancelamento do seu acesso.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-[#F4F6FA] section-padding">
      <div className="container-width">
        <SectionTitle
          title={
            <>
              Perguntas <span className="gradient-text">Frequentes</span>
            </>
          }
        />

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-1 rounded-xl shadow-lg">
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                className={`mb-2 bg-white rounded-lg overflow-hidden ${openIndex === index ? "shadow-md" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  className={`w-full px-6 py-4 text-left flex justify-between items-center transition-colors ${
                    openIndex === index ? "bg-blue-50" : "hover:bg-gray-50"
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`font-serif font-bold ${openIndex === index ? "text-blue-600" : ""}`}>
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={openIndex === index ? "text-blue-600" : "text-gray-400"}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-700 border-t border-gray-100 pt-2">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
