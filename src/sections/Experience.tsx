import { useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { SpotlightCard } from '../components/SpotlightCard'
import { experience, ladder, type Experience as Item } from '../data/profile'
import { easeOut, fadeUp, stagger, viewportOnce } from '../lib/motion'

const INITIAL_COUNT = 6

function Ladder() {
  return (
    <motion.ol
      variants={stagger(0.14)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mb-16 grid gap-3 sm:mb-24 sm:grid-cols-2 lg:grid-cols-4"
    >
      {ladder.map((step, i) => {
        const current = i === ladder.length - 1
        return (
          <motion.li key={step.title} variants={fadeUp} className="relative">
            <div
              className={`h-full rounded-2xl border px-5 py-4 ${
                current
                  ? 'border-brand/50 bg-gradient-to-br from-brand/25 to-brand-deep/5 shadow-[0_0_40px_-12px_rgb(168_85_247/0.7)]'
                  : 'border-brand/15 bg-white/[0.025]'
              }`}
            >
              <p className="flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">
                <span>Step 0{i + 1}</span>
                <span className={current ? 'text-brand-soft' : ''}>{step.since}</span>
              </p>
              <p className="mt-2.5 font-display text-[0.98rem] font-semibold leading-snug">
                {step.title}
              </p>
              {current && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-emerald-300">
                  <span className="size-1.5 rounded-full bg-emerald-400" /> Current
                </p>
              )}
            </div>
            {!current && (
              <ChevronRight
                size={16}
                className="absolute -right-[0.95rem] top-1/2 z-10 hidden -translate-y-1/2 text-brand lg:block"
              />
            )}
          </motion.li>
        )
      })}
    </motion.ol>
  )
}

function TimelineItem({ item, index }: { item: Item; index: number }) {
  const cardLeft = index % 2 === 0
  const number = String(index + 1).padStart(2, '0')

  return (
    <li className="relative grid gap-4 pl-11 sm:pl-14 lg:grid-cols-2 lg:gap-20 lg:pl-0">
      {/* node on the line */}
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '0px 0px -30% 0px' }}
        transition={{ type: 'spring', stiffness: 260, damping: 16 }}
        className="absolute left-3 top-3 z-10 -ml-[9px] grid size-[18px] place-items-center rounded-full border-2 border-brand bg-bg sm:left-5 lg:left-1/2 lg:top-8"
      >
        {item.current && (
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand" />
        )}
        <span className="size-1.5 rounded-full bg-brand-soft" />
      </motion.span>

      {/* number + period */}
      <motion.div
        initial={{ opacity: 0, x: cardLeft ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, ease: easeOut }}
        className={`flex items-end gap-4 lg:flex-col lg:gap-1 lg:pt-1 ${
          cardLeft ? 'lg:order-2 lg:items-start' : 'lg:order-1 lg:items-end lg:text-right'
        }`}
      >
        <span className="text-outline font-display text-5xl font-bold leading-none sm:text-6xl lg:text-8xl">
          {number}
        </span>
        <div className="pb-1 lg:pb-0">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-brand-soft sm:text-sm">
            {item.period}
          </p>
          <p className="mt-0.5 text-xs text-dim sm:text-sm">{item.org}</p>
        </div>
      </motion.div>

      {/* card */}
      <motion.div
        initial={{ opacity: 0, x: cardLeft ? -40 : 40, y: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, ease: easeOut }}
        className={cardLeft ? 'lg:order-1' : 'lg:order-2'}
      >
        <SpotlightCard className="p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-brand/35 bg-brand/15 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-brand-soft">
              {item.project}
            </span>
            {item.current && (
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-emerald-300">
                Now
              </span>
            )}
          </div>
          <h3 className="mt-4 text-lg font-semibold leading-snug sm:text-xl">{item.role}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.summary}</p>
          <ul className="mt-4 space-y-2">
            {item.points.map((point) => (
              <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-fg/80">
                <span className="mt-[0.55em] size-1.5 shrink-0 rotate-45 bg-brand" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tech.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </SpotlightCard>
      </motion.div>
    </li>
  )
}

export function Experience() {
  const [expanded, setExpanded] = useState(false)
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 70%', 'end 70%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.5 })

  const visible = expanded ? experience : experience.slice(0, INITIAL_COUNT)
  const hiddenCount = experience.length - INITIAL_COUNT

  return (
    <section id="experience" className="relative overflow-x-clip py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Work experience —"
          accent="the professional journey."
          align="center"
        >
          From IBM BPM developer to leading the Core Platform: one company, four titles, and
          a widening scope from code to architecture to teams.
        </SectionHeading>

        <Ladder />

        <div ref={timelineRef} className="relative">
          {/* rail */}
          <div className="absolute bottom-0 left-3 top-0 w-px bg-brand/15 sm:left-5 lg:left-1/2">
            <motion.div
              style={{ scaleY }}
              className="size-full origin-top bg-gradient-to-b from-accent via-brand to-brand-deep shadow-[0_0_14px_1px_rgb(168_85_247/0.8)]"
            />
          </div>

          <ol className="space-y-12 sm:space-y-16 lg:space-y-20">
            {visible.map((item, i) => (
              <TimelineItem key={item.project + item.period} item={item} index={i} />
            ))}
          </ol>
        </div>

        {hiddenCount > 0 && (
          <div className="mt-14 flex justify-center">
            <button type="button" onClick={() => setExpanded((v) => !v)} className="btn btn-ghost">
              {expanded ? 'Show less' : `Show ${hiddenCount} earlier roles`}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
