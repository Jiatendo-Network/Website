// /components/common/FooterCard.tsx
"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const FooterCard = () => {
  const [showDialog, setShowDialog] = useState(false)

  const toggleDialog = () => setShowDialog(!showDialog)

  return (
    <div className="relative w-fit">
      {/* Floating avatar + dialog */}
      <div
        onClick={toggleDialog}
        onMouseEnter={() => setShowDialog(true)}
        onMouseLeave={() => setShowDialog(false)}
        className="absolute -top-32 left-1/2 sm:left-auto sm:right-4 -translate-x-1/2 sm:translate-x-0 z-10 cursor-pointer"
      >
        {/* Dialog Bubble */}
        <div
          className={`
            absolute -top-28 left-1/2 sm:left-auto sm:right-0 
            -translate-x-1/2 sm:translate-x-0
            bg-[#6B2DCF] text-white px-4 py-2 rounded-lg shadow-lg 
            text-sm sm:text-base font-semibold w-[240px] 
            pointer-events-none z-50
            transition-all duration-300 ease-out
            ${
              showDialog
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-90 -translate-y-2"
            }
          `}
        >
          My name is Jeku. I&#39;m Jiatendo Network&#39;s personal assistant.
          May Jias be with you all.
        </div>

        {/* Avatar */}
        <Image
          src="/avatar_no_bg_2.png"
          alt="Floating icon"
          width={150}
          height={150}
        />
      </div>

      {/* Main card */}
      <div className="relative bg-[#6B2DCF] w-full sm:w-[300px] h-auto flex-shrink-0 rounded-xl p-4 pt-10 text-white z-20">
        <h2 className="font-bold text-xl mb-2 text-center">
          Want to get the latest updates? <br />
          Join our Discord server!
        </h2>
        <Link
          className="hover:underline hover:italic hover:translate-x-2 transition-all duration-200 ease-out cursor-pointer block text-center"
          href="/"
        >
          &gt; Join the Alliance!
        </Link>
      </div>
    </div>
  )
}

export default FooterCard
