// /components/home/Team.tsx

import Image from "next/image"
import TeamCard from "./TeamCard"

const teamMembers = [
  {
    image_url: "/team/jias.png",
    name: "Jias",
    role: "CEO and Co-Founder of Jiatendo",
    tech_stach: "C++, React, Python",
    github: "https://github.com/keirav",
  },
  {
    image_url: "/team/klaro.png",
    name: "Klaro",
    role: "Co-Founder of Jiatendo",
    tech_stach: "Python, Django, Flask",
    github: "https://github.com/tyskald",
  },
  {
    image_url: "/team/michael.png",
    name: "Michael",
    role: "Full Stack Web and Android Developer",
    tech_stach: "JavaScript, Flutter, Firebase",
    github: "https://github.com/tyskald",
  },
  {
    image_url: "/team/zerexly.png",
    name: "Zerexly",
    role: "API Designer",
    tech_stach: "NodeJS, Express, GraphQL",
    github: "https://github.com/tyskald",
  },
]

const Team = () => {
  return (
    <>
      <div className="bg-[#151536] w-full items-center justify-center px-10 py-4">
        <h2 className="text-3xl text-center font-semibold text-white">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              image_url={member.image_url}
              name={member.name}
              role={member.role}
              tech_stach={member.tech_stach}
              github={member.github}
            />
          ))}
        </div>
        <h2 className="text-3xl text-center font-semibold text-white p-5">
          Screenshots
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto items-center justify-center">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="flex justify-center items-center rounded-lg shadow-md"
            >
              <Image
                src={`/screenshots/ss${num}.png`}
                alt={`Screenshot ${num}`}
                width={300}
                height={200}
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Team
