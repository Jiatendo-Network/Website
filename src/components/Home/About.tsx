// /components/Home/About.tsx

"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const About = () => {
  return (
    <>
      <div className="bg-[#151536] flex flex-col py-5 px-10 w-full items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="shadow-xl rounded-2xl"
          >
            <Image
              src="/about_banner.png"
              alt="About Us"
              width={500}
              height={500}
            />
          </motion.div>
          <div className="flex flex-col items-center justify-center py-5 max-w-md flex-grow">
            <h2 className="font-semibold text-3xl font-righteous text-white">
              About Our Network
            </h2>
            <p className="text-white text-center py-2 sm:px-5">
              We are unstoppable intelligent developers that work with other
              developers around the world, and around the nation. All of my
              developers are some of the most intelligent and the most dedicated
              developers in the nation.
            </p>
          </div>
        </div>
        <Link href="/about">
          <button className="bg-cyan-700 px-5 py-3 rounded-full shadow-md text-white text-xl font-semibold hover:scale-95 transition-all duration-200 ease-in-out">
            Read More About Us
          </button>
        </Link>
      </div>
    </>
  )
}

export default About
