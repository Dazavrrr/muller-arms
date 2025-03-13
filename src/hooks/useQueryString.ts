/* eslint-disable import/prefer-default-export */
'use client'

import { useCallback } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export function useQueryString() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const updateQueryParam = (name: string, value: string) => {
    router.replace(`${pathname}?${createQueryString(name, value)}`)
  }

  return {
    updateQueryParam,
    createQueryString,
    searchParams,
  }
}
