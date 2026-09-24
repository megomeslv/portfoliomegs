import { useEffect, useRef, type RefObject } from 'react'

export default function useReveal(cls = 'in') {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add(cls)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(cls)
          observer.disconnect()
        }
      },
      { threshold: 0.05 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [cls])

  return ref as RefObject<HTMLDivElement>
}
