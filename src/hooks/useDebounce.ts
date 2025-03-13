/* eslint-disable import/prefer-default-export */
import { useCallback, useRef } from 'react'

type Timer = ReturnType<typeof setTimeout>

export function useDebounce<T = unknown>(
  callback: CallableFunction,
  delay: number
) {
  const timer = useRef<Timer>()

  return useCallback(
    (arg: T) => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
      timer.current = setTimeout(() => {
        callback(arg)
      }, delay)
    },
    [callback, delay]
  )
}
