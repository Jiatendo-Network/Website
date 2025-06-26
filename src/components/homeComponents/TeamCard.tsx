// /components/home/TeamCard.tsx

import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

const TeamCard = ({
  image_url,
  name,
  role,
  tech_stach,
  github,
}: {
  image_url: string
  name: string
  role: string
  tech_stach: string
  github: string
}) => {
  return (
    <>
      <div className="bg-[#2B1954] w-full h-full rounded-lg text-white flex flex-col items-center justify-center m-3 p-5 shadow-sm shadow-amber-500">
        <Image src={image_url} alt="Team Member" width={200} height={200} />
        <h2 className="text-2xl text-center font-semibold py-2">{name}</h2>
        <h3 className="text-2xl text-center font-semibold py-2">{role}</h3>
        <p>{tech_stach}</p>
        <Link
          className="p-4 m-2 rounded-full bg-gray-100/60 text-gray-900 text-3xl hover:bg-gray-500 transition"
          href={github}
        >
          <FaGithub />
        </Link>
      </div>
    </>
  )
}

export default TeamCard
