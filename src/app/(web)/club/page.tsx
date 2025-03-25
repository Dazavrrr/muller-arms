import Club from '@/components/Club'
import '@/styles/global.module.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Клуб "MullerArms"',
  description:
    'Взаємодія та спільний результат – головні цінності клубу. Це проявляється не лише у спортивних досягненнях на змаганнях зі стрільби, а й у наших інших активностях. MullerArms – це велика родина, де допомога та увага один до одного є принципом. У нас знаходять друзів, партнерів по бізнесу, нові захоплення та ідеї.',
}

export default function ClubPage() {
  return (
    <>
      <Club />
    </>
  )
}
