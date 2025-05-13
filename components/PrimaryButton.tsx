"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CHECKOUT_URL } from "@/lib/constants"
import { ArrowRight } from "lucide-react"

interface PrimaryButtonProps {
  children: React.ReactNode
  className?: string
  large?: boolean
}

export default function PrimaryButton({ children, className = "", large = false }: PrimaryButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [checkoutUrl, setCheckoutUrl] = useState(CHECKOUT_URL)

  // Função para adicionar parâmetros UTM ao URL de checkout
  useEffect(() => {
    const addUtmParams = () => {
      try {
        // Obter parâmetros da URL atual
        const currentUrl = new URL(window.location.href)
        const params = currentUrl.searchParams

        // Criar URL de checkout
        const hotmartUrl = new URL(CHECKOUT_URL)

        // Função para obter valor de cookie
        const getCookie = (name: string) => {
          const value = `; ${document.cookie}`
          const parts = value.split(`; ${name}=`)
          if (parts.length === 2) return parts.pop()?.split(";").shift()
          return null
        }

        // Coletar valores para o parâmetro sck
        const sckValues = []

        // Adicionar parâmetros UTM se existirem e também ao sck
        const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
        utmParams.forEach((param) => {
          if (params.has(param)) {
            const value = params.get(param)!
            hotmartUrl.searchParams.set(param, value)
            if (value && !sckValues.includes(value)) {
              sckValues.push(value)
            }
          }
        })

        // Verificar e adicionar o parâmetro ref
        if (params.has("ref")) {
          const refValue = params.get("ref")!
          hotmartUrl.searchParams.set("ref", refValue)
          if (refValue && !sckValues.includes(refValue)) {
            sckValues.push(refValue)
          }
        } else {
          // Verificar se há um ref nos cookies
          const refCookie = getCookie("cookieRef")
          if (refCookie) {
            hotmartUrl.searchParams.set("ref", refCookie)
            if (!sckValues.includes(refCookie)) {
              sckValues.push(refCookie)
            }
          }
        }

        // Adicionar valores dos cookies UTM ao sck
        const cookieUtmSource = getCookie("cookieUtmSource")
        const cookieUtmMedium = getCookie("cookieUtmMedium")
        const cookieUtmCampaign = getCookie("cookieUtmCampaign")
        const cookieUtmContent = getCookie("cookieUtmContent")
        const cookieUtmTerm = getCookie("cookieUtmTerm")

        const cookies = [cookieUtmSource, cookieUtmMedium, cookieUtmCampaign, cookieUtmContent, cookieUtmTerm]

        cookies.forEach((cookie) => {
          if (cookie && !sckValues.includes(cookie)) {
            sckValues.push(cookie)
          }
        })

        // Adicionar o parâmetro bid (browser ID) se existir
        if (params.has("bid")) {
          const bidValue = params.get("bid")!
          hotmartUrl.searchParams.set("bid", bidValue)
          if (bidValue && !sckValues.includes(bidValue)) {
            sckValues.push(bidValue)
          }
        }

        // Adicionar o parâmetro sck com todos os valores coletados
        if (sckValues.length > 0) {
          hotmartUrl.searchParams.set("sck", sckValues.join("|"))
        }

        // Preservar outros parâmetros importantes
        if (params.has("src")) {
          hotmartUrl.searchParams.set("src", params.get("src")!)
        }

        setCheckoutUrl(hotmartUrl.toString())
      } catch (error) {
        console.error("Erro ao processar URL de checkout:", error)
      }
    }

    addUtmParams()
  }, [])

  return (
    <motion.a
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-lg font-medium text-white shadow-lg transition-all duration-300 ${large ? "text-lg px-8 py-4" : "text-base px-6 py-3"} ${className}`}
      style={{
        background: "linear-gradient(to right, #2179C4, #1FA2FF, #2ECC71)",
        backgroundSize: "200% 100%",
        backgroundPosition: isHovered ? "100% 0" : "0 0",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px -5px rgba(33, 121, 196, 0.3), 0 8px 10px -6px rgba(33, 121, 196, 0.2)",
      }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <motion.span animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }} className="ml-2">
        <ArrowRight size={large ? 20 : 16} />
      </motion.span>
    </motion.a>
  )
}
