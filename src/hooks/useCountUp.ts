import { useEffect, useRef, useState } from 'react'

export function useCountUp(
  end: number,
  duration = 2000
): [React.RefObject<HTMLDivElement>, number] {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const step = () => {
            start += increment
            if (start < end) {
              setCount(Math.floor(start))
              requestAnimationFrame(step)
            } else {
              setCount(end)
            }
          }
          step()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
  }, [end, duration])

  return [ref, count]
}
