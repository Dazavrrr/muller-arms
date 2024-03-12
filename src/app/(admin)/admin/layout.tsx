'use client'
import AdminSideBar from '@/components/AdminSideBar/AdminSideBar'
import Providers from '@/store/provider'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  const { push } = useRouter()
  useEffect(() => {
    const access = localStorage.getItem('access');
    const refresh = localStorage.getItem('refresh');

    if (access == null || refresh == null){
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      push("/login");
    }
    //eslint-disable-next-line
  }, [])
  return (
    <>
      <Providers>
        <AdminSideBar />
        {children}
      </Providers>
    </>
  )
}
