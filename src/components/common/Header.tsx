"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { BiMenu, BiX } from "react-icons/bi"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { FaUserCircle } from "react-icons/fa";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "PROGRESSION", href: "/progression" },
  { name: "BLOG", href: "https://jiatendo.pythonanywhere.com/" },
  { name: "FORUM", href: "/" },
  {
    name: "DONATION",
    href: "https://buymeacoffee.com/javierofernandez",
    special: true,
  }
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
    setIsOpen(false);
    toast.success("You have been logged out.");
  }, [logout]);

  const renderNavLinks = (onClick?: () => void) =>
    navLinks.map((link) =>
      link.special ? (
        <Link
          key={link.name}
          href={link.href}
          className="bg-white text-[var(--violet)] w-full text-center py-2 rounded-lg font-semibold active:scale-[0.97] transition-transform"
          onClick={onClick}
        >
          {link.name}
        </Link>
      ) : (
        <Link
          key={link.name}
          href={link.href}
          className="w-full py-2 px-2 rounded-md text-white hover:bg-blue-900 transition-colors"
          onClick={onClick}
        >
          {link.name}
        </Link>
      )
    );

  const renderUserActions = (onClick?: () => void) =>
    user ? (
      <>
        <Link
          href="/profile"
          className="w-full py-2 px-2 rounded-md text-white hover:bg-blue-900 transition-colors"
          onClick={onClick}
        >
          PROFILE
        </Link>
        <button
          onClick={handleLogout}
          className="w-full py-2 px-2 cursor-pointer rounded-md bg-blue-700 text-white"
        >
          Logout
        </button>
      </>
    ) : (
      <>
        <Link
          href="/login"
          className="w-full py-2 px-2 rounded-md text-white hover:bg-blue-900 transition-colors"
          onClick={onClick}
        >
          LOGIN
        </Link>
        <Link
          href="/register"
          className="w-full py-2 px-2 rounded-md bg-blue-700 text-white mt-2"
          onClick={onClick}
        >
          REGISTER
        </Link>
      </>
    );

  return (
    <>
      <div className="fixed top-0 right-0 left-0 flex flex-row items-center justify-between px-4 py-2 bg-[var(--violet)] text-white z-50">
        <div className="flex flex-row items-center gap-2">
          <Image src="/favicon.ico" alt="Logo" width={30} height={30} />
          <div className="font-righteous text-2xl font-semibold">Jiatendo</div>
        </div>

        <div className="sm:flex flex-row items-center px-4 gap-4 hidden">
          {renderNavLinks()}
          {renderUserActions()}
        </div>

        <div className="flex flex-row items-center gap-4 sm:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
            tabIndex={0}
          >
            <BiMenu size={28} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-72 bg-[#23294a] z-[100] shadow-2xl flex flex-col"
            aria-label="Sidebar"
            tabIndex={-1}
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-blue-900">
              <div className="flex items-center gap-2">
                <Image src="/favicon.ico" alt="Logo" width={28} height={28} />
                <span className="font-righteous text-xl font-semibold">Jiatendo</span>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                tabIndex={0}
              >
                <BiX size={28} />
              </button>
            </div>

            {user && (
              <div className="flex flex-col items-center py-6 border-b border-blue-900">
                <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center overflow-hidden mb-2">
                  {user.avatarSVG ? (
                    <div
                      className="w-full h-full"
                      dangerouslySetInnerHTML={{ __html: user.avatarSVG }}
                    />
                  ) : (
                    <FaUserCircle className="text-white text-5xl" />
                  )}
                </div>
                <div className="text-white font-bold">{user.nickname}</div>
                <div className="text-blue-300 text-xs">{user.email}</div>
              </div>
            )}

            <nav className="flex flex-col gap-2 px-4 py-6 flex-1">
              {renderNavLinks(() => setIsOpen(false))}
              {renderUserActions(() => setIsOpen(false))}
            </nav>

            <div className="text-center text-blue-400 text-xs py-4 border-t border-blue-900">
              &copy; {new Date().getFullYear()} Jiatendo
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[99]"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar overlay"
        />
      )}
    </>
  )
}

export default Header
