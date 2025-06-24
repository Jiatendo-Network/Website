// /components/common/Footer.tsx
"use client"

import { FaYoutube, FaGithub, FaReddit, FaXTwitter } from "react-icons/fa6"
import Link from "next/link"
import FooterCard from "@/components/common/FooterCard"

export default function Footer() {
  return (
    <div className="bg-[#0a57c9] text-white px-6 py-10">
      <div className="flex flex-col sm:flex-row justify-between max-w-7xl mx-auto gap-10">
        <div className="grid justify-center sm:justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 flex-1">
          {/* Brand */}
          <div className="w-fit">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              Jiatendo
            </h2>
            <p className="text-sm">
              Reviving Nintendo online servers with higher functioning services
              for DS, DSi, 3DS, Wii, and Wii U.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="https://youtube.com/@JiatendoNetwork"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="h-5 w-5 hover:text-zinc-300" />
              </Link>
              <Link
                href="https://github.com/Jiatendo-Network"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-5 w-5 hover:text-zinc-300" />
              </Link>
              <Link
                href="https://reddit.com/r/JiatendoNetwork/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaReddit className="h-5 w-5 hover:text-zinc-300" />
              </Link>
              <Link
                href="https://x.com/JiatendoNetwork/r/JiatendoNetwork"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="h-5 w-5 hover:text-zinc-300" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-fit">
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/progression">Progression</Link>
              </li>
              <li>
                <Link href="https://jiatendo.pythonanywhere.com/">Blog</Link>
              </li>
              <li>
                <Link href="/">Forum</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-fit">
            <h3 className="font-semibold text-lg mb-2">Services</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/">Jiatendo ACNH Shop</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-fit">
            <h3 className="font-semibold text-lg mb-2">Contact</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Discord Server
                </a>
              </li>
              <li>
                <Link href="https://buymeacoffee.com/javierofernandez">
                  Support Us
                </Link>
              </li>
              <li>
                <Link href="/">Report Issues</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Purple card */}
        <FooterCard />
      </div>

      <p className="text-center text-xs mt-10 text-zinc-200">
        © {new Date().getFullYear()} Jiatendo Network. Not affiliated with
        Nintendo. For fans, by fans.
        <br />
        All rights reserved. Making Nintendo great again!
      </p>
    </div>
  )
}
