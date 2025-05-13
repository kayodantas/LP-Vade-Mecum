"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import CountUp from "react-countup"

interface StatItemProps {
  value: string
  label: string
  delay: number
}

const StatItem = ({ value, label, delay }: StatItemProps) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
        {value.endsWith("%") ? <CountUp end={Number.parseInt(value)} suffix="%" duration={2.5} delay={delay} /> : value}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </motion.div>
  )
}

export default function StatsVisual() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto my-12">
      {/* Container with subtle border */}
      <motion.div
        className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8 }}
      >
        {/* Subtle grid lines */}
        <div className="absolute inset-0 grid grid-cols-3 w-full h-full">
          <div className="border-r border-gray-100"></div>
          <div className="border-r border-gray-100"></div>
        </div>

        {/* Content */}
        <div className="relative p-8 md:p-12 flex flex-col md:flex-row justify-between items-center">
          <StatItem value="71%" label="das questões são cópias da lei" delay={0.3} />
          <StatItem value="33k+" label="questões analisadas" delay={0.5} />
          <StatItem value="78%" label="taxa de aprovação" delay={0.7} />
        </div>
      </motion.div>
    </div>
  )
}
