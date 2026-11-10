import type { Variants } from 'motion/react'

export type Bezier = [number, number, number, number]

export const easeOut: Bezier = [0.2, 0.7, 0.2, 1]
export const easeExpo: Bezier = [0.16, 1, 0.3, 1]

/** Parent that staggers its children in. */
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
}

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: easeOut } },
}

/** Text line rising out of an overflow-hidden mask. */
export const rise: Variants = {
  hidden: { y: '115%' },
  show: { y: 0, transition: { duration: 0.95, ease: easeExpo } },
}

export const viewportOnce = { once: true, margin: '0px 0px -12% 0px' } as const
