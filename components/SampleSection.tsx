"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import WhatsButton from "./WhatsButton"
import WhatsModal from "./WhatsModal"
import SectionTitle from "./SectionTitle"

export default function SampleSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="w-full bg-gray-50 section-padding">
      <div className="container-width">
        <SectionTitle
          title={
            <>
              Conheça o <span className="gradient-text">material</span> antes de comprar
            </>
          }
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-sm shadow-xl rounded-lg overflow-hidden">
                <Image
                  src="/images/vade-mecum-capa.png"
                  alt="Capa do Vade Mecum Grifado e Anotado"
                  width={400}
                  height={550}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center md:items-start"
            >
              <h3 className="text-2xl font-serif font-bold mb-4 text-center md:text-left">
                Vade Mecum Grifado e Anotado
              </h3>
              <p className="text-gray-700 mb-6 text-center md:text-left">
                Quer ver como o material funciona antes de comprar? Receba uma amostra gratuita diretamente no seu
                WhatsApp e descubra como o Vade Mecum Grifado pode transformar seus estudos.
              </p>
              <div className="w-full flex justify-center md:justify-start">
                <WhatsButton onClick={() => setOpen(true)} />
              </div>
            </motion.div>
          </div>
        </div>

        <WhatsModal open={open} setOpen={setOpen} />
      </div>
    </section>
  )
}
