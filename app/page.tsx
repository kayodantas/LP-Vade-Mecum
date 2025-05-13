"use client"

import { motion } from "framer-motion"
import Hero from "@/components/Hero"
import PainPoints from "@/components/PainPoints"
import StoryIntro from "@/components/StoryIntro"
import Method from "@/components/Method"
import WhatYouGet from "@/components/WhatYouGet"
import Author from "@/components/Author"
import Testimonials from "@/components/Testimonials"
import Offer from "@/components/Offer"
import FAQ from "@/components/FAQ"
import FinalCTA from "@/components/FinalCTA"
import PriceSection from "@/components/PriceSection"
import ValueProposition from "@/components/ValueProposition"
import SampleSection from "@/components/SampleSection"
import PreventHorizontalScroll from "@/scripts/preventHorizontalScroll"

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col items-center justify-between bg-white overflow-x-hidden"
    >
      <PreventHorizontalScroll />
      <Hero />
      <ValueProposition />
      <div className="mt-[-2rem] md:mt-0">
        <PainPoints />
      </div>
      <Testimonials />
      <PriceSection />
      <SampleSection />
      <StoryIntro />
      <WhatYouGet />
      <Method />
      <Author />
      <Offer />
      <FAQ />
      <FinalCTA />
    </motion.main>
  )
}
