"use client"
import { useState, useEffect, type ChangeEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"

export default function WhatsModal({ open, setOpen }: { open: boolean; setOpen: (b: boolean) => void }) {
  const [phone, setPhone] = useState("")
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [setOpen])

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!open) {
      // Reset after modal closes
      setTimeout(() => {
        setPhone("")
        setSending(false)
        setSuccess(false)
      }, 300)
    }
  }, [open])

  // Função para aplicar a máscara de telefone
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "") // Remove todos os não-dígitos

    // Aplica a máscara conforme o usuário digita
    let formattedValue = ""
    if (value.length > 0) {
      formattedValue = `(${value.slice(0, 2)}`

      if (value.length > 2) {
        formattedValue += `) ${value.slice(2, 3)}`

        if (value.length > 3) {
          formattedValue += ` ${value.slice(3, 7)}`

          if (value.length > 7) {
            formattedValue += `-${value.slice(7, 11)}`
          }
        }
      }
    }

    setPhone(formattedValue)
  }

  const isValidPhone = () => {
    // Verifica se o telefone tem o formato correto
    const digits = phone.replace(/\D/g, "")
    return digits.length === 11 && digits[2] === "9"
  }

  // Função para obter o valor de um cookie
  const getCookie = (name: string) => {
    if (typeof document === "undefined") return null
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null
    return null
  }

  // Função para obter parâmetros da URL
  const getUrlParam = (name: string) => {
    if (typeof window === "undefined") return null
    const params = new URLSearchParams(window.location.search)
    return params.get(name)
  }

  const handleSubmit = async () => {
    if (!isValidPhone()) return

    // Envia dados para o dataLayer
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({ event: "formSubmit", form: "sample_whatsapp", phone })
    }

    setSending(true)

    // Coletar parâmetros UTM da URL ou cookies
    const utmSource = getUrlParam("utm_source") || getCookie("cookieUtmSource") || ""
    const utmMedium = getUrlParam("utm_medium") || getCookie("cookieUtmMedium") || ""
    const utmCampaign = getUrlParam("utm_campaign") || getCookie("cookieUtmCampaign") || ""
    const utmContent = getUrlParam("utm_content") || getCookie("cookieUtmContent") || ""
    const utmTerm = getUrlParam("utm_term") || getCookie("cookieUtmTerm") || ""
    const ref = getUrlParam("ref") || getCookie("cookieRef") || ""
    const bid = getUrlParam("bid") || getCookie("cookieBid") || ""
    const sck = getUrlParam("sck") || ""
    const src = getUrlParam("src") || ""

    // Preparar dados para enviar ao webhook
    const webhookData = {
      phone: phone.replace(/\D/g, ""), // Enviar apenas os dígitos do telefone
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      utm_content: utmContent,
      utm_term: utmTerm,
      ref: ref,
      bid: bid,
      sck: sck,
      src: src,
      page_url: typeof window !== "undefined" ? window.location.href : "",
      timestamp: new Date().toISOString(),
    }

    try {
      // Enviar dados para o webhook
      const response = await fetch(
        "https://webhooks.metododeaprovacao.com.br/webhook/47185604-bd43-416f-badb-2bd956169a79",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(webhookData),
        },
      )

      if (!response.ok) {
        console.error("Erro ao enviar dados para o webhook:", await response.text())
      }
    } catch (error) {
      console.error("Erro ao enviar dados para o webhook:", error)
    }

    // Mostrar mensagem de sucesso após um tempo
    setTimeout(() => {
      setSuccess(true)
      setSending(false)

      // Fecha o modal após mostrar a mensagem de sucesso por alguns segundos
      setTimeout(() => {
        setOpen(false)
      }, 3000)
    }, 1500)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-white rounded-xl p-8 w-full max-w-md shadow-xl"
          >
            {success ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-green-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Amostra enviada!</h3>
                <p className="text-gray-600">Verifique seu WhatsApp para acessar a amostra.</p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-4 text-center">Receber Amostra no WhatsApp</h3>
                <input
                  type="tel"
                  placeholder="(11) 9 1234-5678"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={17} // (99) 9 9999-9999
                  className="w-full border border-gray-300 rounded-md px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSubmit}
                  disabled={sending || !isValidPhone()}
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    sending || !isValidPhone()
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  {sending ? "Enviando…" : "Enviar"}
                </button>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Digite seu número com DDD para receber a amostra
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
