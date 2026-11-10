import { useState } from 'react'
import { motion } from 'motion/react'
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  Building2,
  CalendarDays,
  Check,
  Copy,
  Landmark,
  Microscope,
  SquareTerminal,
  UserRound,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { SpotlightCard } from '../components/SpotlightCard'
import { work, type Work as Item } from '../data/profile'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const ICONS: Record<Item['icon'], LucideIcon> = {
  boxes: Boxes,
  zap: Zap,
  terminal: SquareTerminal,
  landmark: Landmark,
  book: BookOpen,
  bank: Building2,
  microscope: Microscope,
  calendar: CalendarDays,
}

/** Bento rhythm on large screens — each row pairs one wide card with one narrow card. */
const WIDE = new Set([0, 3, 5, 6])

/** Terminal-style snippet with a copy button. */
function Command({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable — the command stays selectable */
    }
  }

  return (
    <div className="relative z-10 mt-5 flex w-fit max-w-full items-center gap-3 rounded-xl border border-brand/20 bg-bg/70 py-1.5 pl-3.5 pr-1.5 font-mono text-[0.78rem]">
      <span className="select-none text-brand">$</span>
      <code className="truncate text-fg/90">{text}</code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Copied' : `Copy command: ${text}`}
        className="grid size-7 shrink-0 place-items-center rounded-lg text-muted transition-colors hover:bg-brand/20 hover:text-white"
      >
        {copied ? <Check size={14} className="text-emerald-300" /> : <Copy size={14} />}
      </button>
    </div>
  )
}

export function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading index="03" eyebrow="Selected work" title="Platforms and tools I've" accent="designed, built and run.">
          Enterprise platforms, the tools I&apos;ve built to speed up delivery, open source — and
          the research project that started it all.
        </SectionHeading>

        <motion.div
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {work.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className={WIDE.has(i) ? 'lg:col-span-2' : ''}
              >
                <SpotlightCard className="group flex h-full flex-col overflow-hidden p-6 sm:p-7">
                  {/* oversized ghost icon */}
                  <Icon
                    aria-hidden
                    strokeWidth={0.8}
                    className="pointer-events-none absolute -bottom-8 -right-6 size-44 text-brand/[0.09] transition-all duration-700 group-hover:-translate-y-2 group-hover:-rotate-6 group-hover:text-brand/20"
                  />

                  <div className="flex items-center justify-between gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand/30 to-brand-deep/10 text-brand-soft ring-1 ring-brand/30">
                      <Icon size={20} />
                    </span>
                    <span className="text-right font-mono text-[0.66rem] uppercase tracking-[0.18em] text-dim">
                      {item.sector}
                    </span>
                  </div>

                  <h3 className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xl font-semibold sm:text-2xl">
                    {item.title}
                    {item.badge && (
                      <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[0.6rem] font-normal uppercase tracking-[0.14em] text-accent">
                        {item.badge}
                      </span>
                    )}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{item.text}</p>

                  <p className="mt-4 flex items-center gap-2 text-[0.8rem] text-fg/85">
                    <UserRound size={14} className="shrink-0 text-brand" />
                    {item.role}
                  </p>

                  {item.command && <Command text={item.command} />}

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
                    {item.tech.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {item.links && (
                    <div className="relative z-10 mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-brand-soft transition-colors hover:text-white"
                        >
                          {link.label}
                          <ArrowUpRight
                            size={15}
                            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        </a>
                      ))}
                    </div>
                  )}
                </SpotlightCard>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
