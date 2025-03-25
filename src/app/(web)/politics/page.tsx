import Policy from '@/components/Policy'
import '@/styles/globals.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Політика використання файлів cookies компанією Muller Arms',
  description:
    'Ласкаво просимо на сторінку `"`Cookies`"` веб-сайту компанії Muller Arms. Наша компанія використовує файли cookies та інші технології для забезпечення найкращого користувацького досвіду та оптимізації роботи нашого веб-сайту.',
}

export default function PoliticsPage() {
  return (
    <>
      <Policy />
    </>
  )
}
