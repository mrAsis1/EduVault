import { useEffect, useRef } from 'react'

export function useScrollFade() {
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const isSyncing = useRef(false)

  useEffect(() => {
    const els = refs.current.filter(Boolean) as HTMLDivElement[]
    if (!els.length) return

    const updateFade = (el: HTMLDivElement, scrollLeft: number) => {
      const atStart = scrollLeft <= 2
      const atEnd = scrollLeft >= el.scrollWidth - el.clientWidth - 2
      el.classList.toggle('at-start', atStart)
      el.classList.toggle('at-end', atEnd)
    }

    const handlers = els.map(el => {
      const handler = () => {
        if (isSyncing.current) return
        isSyncing.current = true
        // sync all other els to this one's scroll position
        els.forEach(other => {
          other.scrollLeft = el.scrollLeft
          updateFade(other, el.scrollLeft)
        })
        isSyncing.current = false
      }
      el.addEventListener('scroll', handler)
      updateFade(el, 0)
      return { el, handler }
    })

    return () => {
      handlers.forEach(({ el, handler }) => el.removeEventListener('scroll', handler))
    }
  }, [])

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    refs.current[index] = el
  }

  return setRef
}