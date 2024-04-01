import Hero from "@/components/Hero"
import '@/styles/globals.scss'
import Instructors from '@/components/Instructors'
import Advantages from '@/components/Advantages'
import About from '@/components/About'
import Instagram from '@/components/Instagram'
import Partners from "@/components/Partners"
import Experience from "@/components/Experience"
import Reviews from "@/components/Reviews"

export default function Home() {
  return <>
    <Hero />
    <About />
    <Partners />
    <Experience />
    <Instructors />
    <Advantages />
    <Reviews />
    <Instagram />
  </>
}
