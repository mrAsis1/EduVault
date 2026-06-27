import { useEffect, useRef } from 'react'

export function useScrollFade() {
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const isSyncing = useRef(false)

  useEffect(() => {
    const els = refs.current.filter(Boolean) as HTMLDivElement[]
    if (!els.length) return

    const syncWidths = () => {
      // find the widest scrollWidth among all els
      const maxScrollWidth = Math.max(...els.map(el => el.scrollWidth))
      // force all inner content to that width so shorter rows scroll the same distance
      els.forEach(el => {
        const inner = el.querySelector('.scroll-inner') as HTMLElement | null
        if (inner) inner.style.minWidth = `${maxScrollWidth}px`
      })
    }

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

    // sync widths after mount and on resize
    syncWidths()
    const ro = new ResizeObserver(syncWidths)
    els.forEach(el => ro.observe(el))

    return () => {
      handlers.forEach(({ el, handler }) => el.removeEventListener('scroll', handler))
      ro.disconnect()
    }
  }, [])

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    refs.current[index] = el
  }

  return setRef
}