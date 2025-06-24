// /app/about/page.tsx

import Image from "next/image"

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[var(--violet)] to-[var(--blue)] text-gray-100 py-20 px-3">
      <div className="bg-white/5 py-5 rounded-xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 px-5 py-10">
          {/* Left Text Section */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 animate-fade-in-up">
              About <br />{" "}
              <span className="text-blue-500">Jiatendo Network</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0 animate-fade-in">
              Learn more about our mission, technology, and vision for the
              future of Nintendo online gaming.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 m-3">
            <Image
              src="/blog/image1.png"
              alt="Animal Crossing New Leaf"
              className="w-full h-auto rounded-lg shadow-lg object-contain"
              width={400}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 px-4">
        <div className="mb-8">
          <section className="mb-8 p-6 bg-white/10 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">What We Do?</h2>
            <p className="mb-4">
              At Jiatendo Network, we use accommodations of building, reverse
              engineering, and exploits to enhance gaming experiences—from
              homebrew patchers, DNS servers, and Luma3DS files to going above
              and beyond in our phenomenal operations.
            </p>
            <p>
              This project will be an example of Level256, but stronger and
              higher performing. Instead of buying a physical server, we&#39;ll
              use combinations of online VPS and unique databases to make things
              lightning fast.
            </p>
          </section>

          <div className="text-center my-8">
            <Image
              src="/blog/image2.png"
              alt="Jiatendo Network Operations"
              className="rounded-xl w-full max-w-[800px] h-auto border border-white/10 mx-auto object-cover"
              width={800}
              height={500}
            />
          </div>

          <section className="mb-8 p-6 bg-white/10 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              How Do We Recruit Development Teams?
            </h2>
            <p>
              Discord, of course! There are tons of coding servers where
              brilliant minds connect, share knowledge, and even look for
              careers. From Full Stack Developers to specialized experts—our
              community is filled with talent.
            </p>
          </section>

          <section className="mb-8 p-6 bg-white/10 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              Will This Be The Next Big Thing?
            </h2>
            <p className="mb-4">
              Absolutely!! This project combines every strategy in the NEX
              universe. Open source, free beta testing, community friendly—and
              hands-on!
            </p>
            <p className="mb-4">
              Our Discord server supports all languages (unlike Pretendo). We
              help you mod your consoles and teach the hidden arts of the
              Ultimate Jias.
            </p>
            <p>
              We believe in people. No matter your country, background, or
              level—you deserve to thrive. The Ultimate Jias lives in every
              gamer&#39;s soul. I used to be a pro ACNL modder—I&#39;ll teach
              you everything I know.
            </p>
          </section>

          <section className="mb-12 p-6 bg-white/10 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-6">
              Jiatendo Network First Mandatory Games
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  img: "/blog/image3.jpg",
                  title: "Animal Crossing New Leaf",
                  desc: "Experience the thrill of racing with enhanced online capabilities.",
                },
                {
                  img: "/blog/image5.jpg",
                  title: "Mario Kart Wii",
                  desc: "Connect with friends and visit towns with our improved servers.",
                },
                {
                  img: "/blog/image4.jpg",
                  title: "Splatoon",
                  desc: "Battle online with friends using our lag-free connection.",
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

        <section className="bg-white/10 rounded-xl p-8 text-center shadow">
          <h2 className="text-3xl font-bold mb-4">
            Join the Jiatendo Network Community
          </h2>
          <p className="text-lg mb-6">
            Be part of the revolution in Nintendo online gaming. Join our
            Discord server to connect with developers and gamers worldwide.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white font-bold px-6 py-3 rounded-lg"
          >
            Join Discord Server
          </a>
        </section>
      </div>
    </div>
  )
}

export default About
