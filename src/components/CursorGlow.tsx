import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

/** Soft purple light that trails the pointer. Desktop (fine pointer) only. */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-600)
  const y = useMotionValue(-600)
  const sx = useSpring(x, { stiffness: 120, damping: 22, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 120, damping: 22, mass: 0.6 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-0 -ml-[260px] -mt-[260px] size-[520px] rounded-full bg-[radial-gradient(circle,rgb(168_85_247/0.13),transparent_65%)]"
    />
  )
}
