import CertificatesPage from '@/components/CertificatesPage'
import '@/styles/global.module.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Сертифікати "MullerArms"',
  description:
    'Наші сертифікати найкращий варіант подарунку - незабутні емоції й корисний досвід, який залишиться на все життя. Сертифікати не мають обмежень. Ви можете покласти на депозит будь яку суму. А людина якій ви зробите такий подарунок зможе обрати собі будь які опції на тренування на свій смак, в межах суми депозиту.',
}

export default function Certificates() {
  return (
    <>
      <CertificatesPage />
    </>
  )
}
