import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { fadeUp, rise, stagger, viewportOnce } from '../lib/motion'

type Props = {
  index: string
  eyebrow: string
  /** Plain part of the title. */
  title: string
  /** Gradient-highlighted part of the title. */
  accent: string
  children?: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({ index, eyebrow, title, accent, children, align = 'left' }: Props) {
  const centered = align === 'center'
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`mb-12 max-w-3xl sm:mb-16 ${centered ? 'mx-auto text-center' : ''}`}
    >
      <motion.p variants={fadeUp} className="eyebrow">
        <span className="text-dim">{index}</span>
        {eyebrow}
      </motion.p>
      <h2 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
        <span className="block overflow-hidden pb-[0.12em]">
          <motion.span variants={rise} className="block">
            {title}
          </motion.span>
        </span>
        <span className="block overflow-hidden pb-[0.16em]">
          <motion.span variants={rise} className="text-gradient block">
            {accent}
          </motion.span>
        </span>
      </h2>
      {children && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 text-base leading-relaxed text-muted sm:text-lg ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
        >
          {children}
        </motion.p>
      )}
    </motion.div>
  )
}
