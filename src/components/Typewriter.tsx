import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'

type Props = {
  words: string[]
  /** Start typing only once this is true. */
  start?: boolean
  className?: string
}

/** Types, holds and deletes each word in a loop. */
export function Typewriter({ words, start = true, className }: Props) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const word = words[index % words.length]

  useEffect(() => {
    if (!start || reduce) return
    let delay = deleting ? 28 : 62
    if (!deleting && length === word.length) delay = 1900
    if (deleting && length === 0) delay = 320

    const id = setTimeout(() => {
      if (!deleting && length === word.length) setDeleting(true)
      else if (deleting && length === 0) {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else setLength((l) => l + (deleting ? -1 : 1))
    }, delay)
    return () => clearTimeout(id)
  }, [start, reduce, deleting, length, word, words.length])

  return (
    <span className={className} aria-label={words.join(', ')}>
      <span aria-hidden>{reduce ? words[0] : word.slice(0, length)}</span>
      <span
        aria-hidden
        className="ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] animate-blink rounded-[2px] bg-brand"
      />
    </span>
  )
}
