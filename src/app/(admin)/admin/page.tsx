"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const AdminPage = () => {

  const { push } = useRouter();
  useEffect(() => {
    push('/admin/bookings')
    //eslint-disable-next-line
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default AdminPage
