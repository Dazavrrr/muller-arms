import '@/styles/globals.scss'
import Services from '@/components/Services'
import ServicesHero from '@/components/ServicesHero'
import Certificates from '@/components/Certificates'
import ServicesAdvantages from '@/components/ServicesAdvantages'
import Weapons from '@/components/Weapons'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Послуги "MullerArms"',
  description:
    'Наші тренери визначать усі ваші слабкі й сильні сторони, й побудють покрокову програму вашого вдосконалення',
}

export default function OurServices() {
  return (
    <>
      <ServicesHero />
      <Services />
      <Certificates />
      <ServicesAdvantages />
      <Weapons />
    </>
  )
}
