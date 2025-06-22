import About from "@/components/home/About"
import Hero from "@/components/home/Hero"
// import Snowfall from "@/components/snow/SnowFall"

export default function Home() {
  return (
    <>
      {/* <Snowfall /> */}
      <main>
        <div>
          <Hero />
          <About />
        </div>
      </main>
    </>
  )
}
