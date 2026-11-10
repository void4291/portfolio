type Props = {
  items: string[]
  reverse?: boolean
}

/** Infinite horizontal ticker. Pauses on hover. */
export function Marquee({ items, reverse = false }: Props) {
  const loop = [...items, ...items]
  return (
    <div className="marquee-mask overflow-hidden" aria-hidden>
      <div
        className={`marquee-track flex w-max gap-4 pr-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 rounded-full border border-brand/15 bg-white/[0.03] px-5 py-2.5 font-display text-base font-medium text-muted sm:text-lg"
          >
            <span className="size-1.5 rounded-full bg-brand shadow-[0_0_10px_2px_rgb(168_85_247/0.7)]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
