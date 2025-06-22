// components/ProgressCircle.jsx

"use client"
import { motion } from "framer-motion"

const ProgressCircle = ({
  percentage,
  title,
  children,
}: {
  percentage: number
  title: string
  children: React.ReactNode
}) => {
  const angle = (percentage / 100) * 360

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 m-4">
        {/* Outer Circle Glow */}
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full blur-lg opacity-70"
          style={{
            background: `conic-gradient(#4f46e5 ${angle}deg, #1e293b ${angle}deg)`,
          }}
        />

        {/* Actual Circle */}
        <motion.div
          initial={{
            background: "conic-gradient(#1e293b 0deg, #1e293b 360deg)",
          }}
          animate={{
            background: `conic-gradient(#6366f1 ${angle}deg, #1e293b ${angle}deg)`,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full rounded-full"
        />

        {/* Inner glass circle */}
        <div className="absolute top-2 left-2 w-[88%] h-[88%] rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10">
          <span className="text-xl font-bold text-indigo-300">
            {percentage}%
          </span>
        </div>
      </div>
      <div className="text-white flex flex-col p-4">
        <h2 className="text-center font-semibold text-xl font-righteous">
          {title}
        </h2>
        <p className="">{children}</p>
      </div>
    </div>
  )
}

export default ProgressCircle
