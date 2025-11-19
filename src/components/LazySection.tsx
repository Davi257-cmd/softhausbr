import React, { useEffect, useRef, useState } from 'react'

type Loader<T> = () => Promise<{ default: React.ComponentType<T> }>

export default function LazySection<T extends {}>({ loader, fallback, props }: { loader: Loader<T>; fallback?: React.ReactNode; props?: T }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [Comp, setComp] = useState<React.ComponentType<T> | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            obs.disconnect()
          }
        })
      },
      { rootMargin: '200px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (inView && !Comp) {
      loader().then((mod) => setComp(() => mod.default))
    }
  }, [inView, Comp, loader])

  return (
    <div ref={ref}>
      {Comp ? <Comp {...(props as T)} /> : fallback ?? null}
    </div>
  )
}