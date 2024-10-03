import '@/styles/globals.scss'
import Services from '@/components/Services'
import ServicesHero from '@/components/ServicesHero'
import Certificates from '@/components/Certificates'
import ServicesAdvantages from '@/components/ServicesAdvantages'
import Weapons from '@/components/Weapons'

export default function OurServices() {
  return <>
    <ServicesHero />
    <Services />
    <Certificates />
    <ServicesAdvantages />
    <Weapons />
  </>
}
