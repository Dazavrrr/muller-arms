import Hero from "@/components/Hero"
import '@/styles/globals.scss'
import Services from '@/components/Services'
import Instructors from '@/components/Instructors'
import Advantages from '@/components/Advantages'
import About from '@/components/About'
import Instagram from '@/components/Instagram'
import Partners from "@/components/Partners"

export default function Home() {
  return <>
    <Hero />
    <About />
    <Partners />
    <Services />
    <Instructors />
    <Advantages />
    <Instagram />
  </>
}
