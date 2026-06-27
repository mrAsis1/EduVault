import { useEffect, useRef } from 'react'

export function useScrollFade() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const atStart = el.scrollLeft <= 2
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2
      el.classList.toggle('at-start', atStart)
      el.classList.toggle('at-end', atEnd)
    }

    // Set initial state
    update()
    el.addEventListener('scroll', update)
    return () => el.removeEventListener('scroll', update)
  }, [])

  return ref
}