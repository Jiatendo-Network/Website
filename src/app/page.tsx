import About from "@/components/Home/About"
import Hero from "@/components/Home/Hero"
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
