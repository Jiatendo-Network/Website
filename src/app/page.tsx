import About from "@/components/home/About"
import Hero from "@/components/home/Hero"
import Faq from "@/components/home/FaqSection"
import Team from "@/components/home/Team"
import Snowfall from "@/components/snow/SnowFall"

export default function Home() {
  return (
    <>
      <main>
        <Snowfall />
        <div>
          <Hero />
          <About />
          <Team />
          <Faq />
        </div>
      </main>
    </>
  )
}
