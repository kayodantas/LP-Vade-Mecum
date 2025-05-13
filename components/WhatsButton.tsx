"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 border-2 border-blue-500 text-blue-500 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
    >
      <MessageCircle size={20} />
      <span className="whitespace-nowrap">Receber Amostra no WhatsApp</span>
    </button>
  )
}
