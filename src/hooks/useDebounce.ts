import { useEffect, useState } from 'react'

export const useDebounce = (callback: () => void, delay: number) => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (timer) {
      clearTimeout(timer)
    }
    const newTimer = setTimeout(() => {
      callback()
    }, delay)
    setTimer(newTimer)

    return () => {
      clearTimeout(newTimer)
    }
  }, [callback, delay])

  return timer
}
