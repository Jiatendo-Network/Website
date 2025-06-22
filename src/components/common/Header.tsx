"use client"

import { useState } from "react"
import Link from "next/link"
import { BiUser, BiMenu, BiX } from "react-icons/bi"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "PROGRESSION", href: "/progression" },
  { name: "BLOG", href: "https://jiatendo.pythonanywhere.com/" },
  { name: "FORUM", href: "/" },
  {
    name: "DONATION",
    href: "https://buymeacoffee.com/javierofernandez",
    special: true,
  },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 right-0 left-0 flex flex-row items-center justify-between px-4 py-2 bg-[var(--violet)] text-white z-50">
        <div className="font-righteous text-2xl font-semibold">Jiatendo</div>

        {/* Desktop Nav */}
        <div className="sm:flex flex-row items-center px-4 gap-4 hidden">
          {navLinks.map((link) =>
            link.special ? (
              <Link
                key={link.name}
                href={link.href}
                className="bg-[#6B2DCF] py-1 px-2 rounded-lg hover:scale-105 transition"
              >
                {link.name}
              </Link>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="relative group overflow-hidden"
              >
                {link.name}
                <span className="block h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            )
          )}
          <BiUser className="border-2 border-white rounded-full scale-110 hover:scale-120 transition" />
        </div>

        {/* Hamburger Icon */}
        <div className="flex flex-row items-center gap-4 sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <BiX size={24} /> : <BiMenu size={24} />}
          </button>
          <BiUser className="border-2 border-white rounded-full" />
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden flex flex-col items-start gap-3 px-6 py-4 bg-transparent text-white mt-[3.5rem] absolute w-full z-40 overflow-hidden"
          >
            {navLinks.map((link) =>
              link.special ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="bg-white text-[var(--violet)] mx-auto w-xs text-center py-2 rounded-lg font-semibold active:scale-[0.97] transition-transform"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-full py-2 px-2 rounded-md active:bg-white/10 transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
