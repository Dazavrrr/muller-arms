import '@/styles/globals.scss'
import Qualifications from '@/components/Qualifications'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Кваліфікації та Рекорди Клубу "MullerArms"',
  description:
    'Класифікація - це фіксований і стандартизований комплекс вправ, який усі бажаючі можуть прострілювати із певною періодичнстю, та спостерігати за власною прогресією чи навпаки, виявляти, аналізувати та опрацьовувати помилки.',
}

export default function QualificationsPage() {
  return (
    <>
      <Qualifications />
    </>
  )
}
