"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "What is Jiatendo Network?",
    a: "Jiatendo Network is a revival for discontinued Nintendo online servers, so everybody around the world can play online again at their highest standards, and our servers are more higher functioning, unlike Pretendo that they're always having technical issues with their services, we also create custom DNS servers for the Nintendo 3DS, ACNL and MK7 plugins, and I make Animal Crossing New Horizons Treasure Islands.",
  },
  {
    q: "What is the progress like?",
    a: "There is an estimated time for everything. We support the Nintendo DS, DSi, 3DS, Wii, and Wii U. We even make custom DNS servers for all listed.",
  },
  {
    q: "Who is Jias?",
    a: "I am the Ultimate Jias, I am the King of the ACNL Islands. Everybody knows me for who I am, and together. We will make Nintendo great again 2025!!!! I accept this nomination as your next hero for Nintendo!!!",
  },
]

const Faq = () => {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (idx: number) => {
    setOpen(open === idx ? null : idx)
  }

  return (
    <div className="bg-[#151536] w-full flex items-center justify-center">
      <div className="w-[80%] mx-auto p-6">
        <h2 className="text-3xl text-white font-bold text-center mb-6">FAQs</h2>
        {faqs.map((faq, idx) => {
          const isOpen = open === idx
          return (
            <div
              key={idx}
              className="bg-zinc-800 text-white rounded-xl mb-4 p-4 shadow-lg"
            >
              <button
                onClick={() => toggle(idx)}
                className="flex justify-between items-center w-full font-medium"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && <p className="mt-3 text-zinc-300 text-sm">{faq.a}</p>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Faq
