import type { HTMLAttributes, PointerEvent } from 'react'

type Props = HTMLAttributes<HTMLDivElement> & {
  /** Lift the card slightly on hover. */
  lift?: boolean
}

/** Glass card whose border and surface glow follow the pointer. */
export function SpotlightCard({ className = '', lift = true, children, ...rest }: Props) {
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      {...rest}
      onPointerMove={onPointerMove}
      className={`card ${lift ? 'card-lift' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
