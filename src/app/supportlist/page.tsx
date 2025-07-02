import Snowfall from "@/components/snow/SnowFall";
import Image from "next/image";

const SupportList = () => {
  return (
    <>
      <Snowfall />
      <div className="bg-gradient-to-b from-[var(--violet)] to-[var(--blue)] text-gray-100 py-20 px-3">
        <div className="container mx-auto mt-12 px-4">
          <div className="mb-8">
            <section className="mb-12 p-6 bg-white/10 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-6">
                Jiatendo Network Secondary Mandatory Games
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  {
                    img: "/images/Mario-kart-DS.jfif",
                    title: "Mario Kart DS",
                    desc: "",
                  },
                  {
                    img: "/images/Animal-Crossing-Wild-World.avif",
                    title: "Animal Crossing Wild World",
                    desc: "",
                  },
                  {
                    img: "/images/Mario-Kart-7.jpg",
                    title: "Mario kart 7",
                    desc: "",
                  },
                  {
                    img: "/images/Animal-Crossing-City-Folk.jpg",
                    title: "Animal Crossing City Folk",
                    desc: "",
                  },
                  {
                    img: "/images/Mario-Kart-8.jpg",
                    title: "Mario Kart 8",
                    desc: "",
                  },
                  {
                    img: "/images/IMG_2193.jpg",
                    title: "Minecraft Wii U",
                    desc: "",
                  },
                ].map((game, i) => (
                  <div
                    key={i}
                    className="bg-white/10 p-4 rounded-xl shadow text-center"
                  >
                    <Image
                      src={game.img}
                      alt={game.title}
                      className="rounded-md h-48 w-full object-cover mb-3"
                      width={100}
                      height={100}
                    />
                    <h5 className="text-lg font-semibold">{game.title}</h5>
                    <p className="text-sm text-gray-300 mt-1">{game.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportList;
