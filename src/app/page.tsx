import About from "@/components/homeComponents/About"
import Hero from "@/components/homeComponents/Hero"
import Faq from "@/components/homeComponents/FaqSection"
import Team from "@/components/homeComponents/Team"
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
