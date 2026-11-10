import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { easeOut, viewportOnce } from '../lib/motion'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  /** Initial offset in px. */
  x?: number
  y?: number
}

/** Fades and slides its children in the first time they scroll into view. */
export function Reveal({ children, className, delay = 0, x = 0, y = 26 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.75, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}
