import '@/styles/globals.scss'
import BlogComponent from '@/components/Blog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Блог "MullerArms"',
  description:
    'Захопливі статті: навчайтеся стріляти та забезпечуйте свою безпеку',
}

export default function Blog() {
  return (
    <>
      <BlogComponent />
    </>
  )
}
