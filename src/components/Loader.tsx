import { useEffect, useState } from 'react'
import { animate, motion } from 'motion/react'
import { profile } from '../data/profile'
import { easeExpo } from '../lib/motion'

const WORDS = ['Lead', 'Architect', 'Deliver', 'Scale']

/** Intro curtain shown once per browser session. */
export function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined
    const controls = animate(0, 100, {
      duration: 1.8,
      ease: [0.5, 0, 0.2, 1],
      onUpdate: setProgress,
      onComplete: () => {
        timeout = setTimeout(onDone, 280)
      },
    })
    return () => {
      controls.stop()
      clearTimeout(timeout)
    }
  }, [onDone])

  const letters = profile.name.toUpperCase().split('')
  const activeWord = Math.min(WORDS.length - 1, Math.floor((progress / 100) * WORDS.length))

  return (
    <motion.div
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg px-6"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgb(124_58_237/0.22),transparent_55%)]" />

      <motion.div
        className="relative flex flex-col items-center"
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="flex flex-wrap justify-center font-display text-3xl font-bold tracking-[0.18em] sm:text-5xl">
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.05 + i * 0.045, ease: easeExpo }}
              className={i > profile.firstName.length ? 'text-[#c084fc]' : ''}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.42em] text-dim"
        >
          Portfolio
        </motion.p>

        <div className="mt-10 h-[3px] w-56 overflow-hidden rounded-full bg-white/[0.07] sm:w-72">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-deep via-brand to-accent shadow-[0_0_14px_rgb(168_85_247/0.9)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-6 flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.25em] sm:gap-5 sm:text-xs">
          {WORDS.map((word, i) => (
            <span
              key={word}
              className={`transition-colors duration-300 ${i <= activeWord ? 'text-brand-soft' : 'text-dim/50'}`}
            >
              {word}.
            </span>
          ))}
        </div>

        <p className="mt-6 font-mono text-xs tabular-nums text-dim">{Math.round(progress)}%</p>
      </motion.div>
    </motion.div>
  )
}
