import About from "@/components/home/About"
import Hero from "@/components/home/Hero"
import Team from "@/components/home/Team"
// import Snowfall from "@/components/snow/SnowFall"

export default function Home() {
  return (
    <>
      {/* <Snowfall /> */}
      <main>
        <div>
          <Hero />
          <About />
          <Team />
        </div>
      </main>
    </>
  )
}
