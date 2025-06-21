// /components/Home/Hero.tsx
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaYoutube, FaGithub, FaReddit, FaXTwitter } from "react-icons/fa6"

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center py-20 bg-gradient-to-b from-[var(--violet)] to-[var(--blue)]">
        <div className="flex flex-row w-full">
          <div className="flex flex-col px-5">
            <h2 className="text-white text-3xl font-righteous font-semibold px-2 py-4">
              Discover Where All Nintendo Console Online Wishes Come True By The
              Ultimate Jias
            </h2>
            <h2 className="text-white text-xl font-righteous px-2 py-4">
              Jiatendo Network is an open source program and free beta services
              that is similar to Pretendo, Wiimmfi, and Level256, but more
              advanced. We make servers 100x faster and more open communication
              with developers around the world. We support DS, DSi, 3DS, Wii,
              and Wii U!!!
            </h2>
          </div>
          {/* bottom on mobile */}
          <div className="py-10 px-5 hidden md:block">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="shadow-xl rounded-2xl"
            >
              <Image
                src="/hero_image.png"
                alt="Hero Banner"
                width={1000}
                height={1000}
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-row justify-around items-center w-full px-1 py-4">
          <a className="p-4 px-5 sm:px-7 rounded-full text-xl text-white font-righteous font-bold bg-[var(--violet)]">
            Join Us
          </a>
          <Link
            className="p-4 rounded-full bg-gray-100/60 text-red-600 text-3xl hover:bg-gray-500 transition"
            href="https://youtube.com/@jiatendonetwork?si=CVU9LGvpY6QTLl5n"
          >
            <FaYoutube />
          </Link>
          <Link
            className="p-4 rounded-full bg-gray-100/60 text-black text-3xl hover:bg-gray-500 transition"
            href="https://x.com/JiatendoNetwork"
          >
            <FaXTwitter />
          </Link>
          <Link
            className="p-4 rounded-full bg-gray-100/60 text-gray-900 text-3xl hover:bg-gray-500 transition"
            href="https://github.com/Jiatendo-Network"
          >
            <FaGithub />
          </Link>
          <Link
            className="p-4 rounded-full bg-gray-100/60 text-orange-600 text-3xl hover:bg-gray-500 transition"
            href="https://reddit.com/r/JiatendoNetwork/"
          >
            <FaReddit />
          </Link>
        </div>

        {/* bottom on mobile */}
        <div className="py-10 px-5 md:hidden">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="shadow-xl rounded-2xl"
          >
            <Image
              src="/hero_image.png"
              alt="Hero Banner"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Hero
