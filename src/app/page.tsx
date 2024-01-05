import { MontserratFont, DuskDemon } from 'src/common/fonts'
import Hero from "@/components/Hero"
import '@/styles/globals.scss'
import Services from '@/components/Services'
import Instructors from '@/components/Instructors'
import Advantages from '@/components/Advantages'

export default function Home() {
  return <div>
    <Hero />
    <Services />
    <Instructors />
    <Advantages />
  </div>
}
