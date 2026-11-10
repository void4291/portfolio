import { useEffect, useState, type PointerEvent } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react'
import { ArrowDown, ArrowRight, Award, BadgeCheck, CalendarClock, Trophy } from 'lucide-react'
import { CountUp } from '../components/CountUp'
import { Typewriter } from '../components/Typewriter'
import { awards, certifications, profile, yearsOfExperience } from '../data/profile'
import { fadeUp, rise, stagger } from '../lib/motion'

const years = yearsOfExperience()

/* ----------------------------- terminal card ----------------------------- */

type Line =
  | { kind: 'cmd'; text: string; at: number; speed: number }
  | { kind: 'out'; text: string; at: number }
  | { kind: 'kv'; label: string; value: string; at: number; status?: boolean }

const DESCRIBE = 'kubectl describe engineer wajahat'
const KV_START = 1500 + DESCRIBE.length * 32 + 250

const LINES: Line[] = [
  { kind: 'cmd', text: 'whoami', at: 400, speed: 70 },
  { kind: 'out', text: 'wajahat-rahman', at: 1000 },
  { kind: 'cmd', text: DESCRIBE, at: 1500, speed: 32 },
  { kind: 'kv', label: 'Name', value: profile.name, at: KV_START },
  { kind: 'kv', label: 'Role', value: profile.title, at: KV_START + 150 },
  { kind: 'kv', label: 'Namespace', value: 'techlogix/core-platform', at: KV_START + 300 },
  { kind: 'kv', label: 'Labels', value: 'architect, sre, tech-lead, full-stack', at: KV_START + 450 },
  { kind: 'kv', label: 'Uptime', value: `${years}y · since Nov 2017`, at: KV_START + 600 },
  { kind: 'kv', label: 'Status', value: 'Running', at: KV_START + 750, status: true },
]
const TOTAL = KV_START + 1100

/** Milliseconds elapsed since `run` became true (jumps to the end when `instant`). */
function useClock(run: boolean, total: number, instant: boolean) {
  const [elapsed, setElapsed] = useState(0)
  useEffect(() => {
    if (!run) return
    if (instant) {
      setElapsed(total)
      return
    }
    const start = performance.now()
    const id = setInterval(() => {
      const now = performance.now() - start
      setElapsed(now)
      if (now >= total) clearInterval(id)
    }, 40)
    return () => clearInterval(id)
  }, [run, total, instant])
  return elapsed
}

function Prompt() {
  return (
    <span className="select-none">
      <span className="text-accent">~</span> <span className="text-brand">❯</span>{' '}
    </span>
  )
}

function Terminal({ ready }: { ready: boolean }) {
  const reduce = useReducedMotion() ?? false
  const t = useClock(ready, TOTAL, reduce)

  return (
    <div className="font-mono text-[0.7rem] leading-relaxed sm:text-[0.8rem]">
      <div className="flex items-center gap-2 border-b border-brand/15 px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#f472b6]" />
        <span className="size-2.5 rounded-full bg-[#c084fc]" />
        <span className="size-2.5 rounded-full bg-[#818cf8]" />
        <span className="ml-2 text-[0.68rem] text-dim">wajahat@techlogix: ~</span>
      </div>
      <div className="min-h-[17.5rem] space-y-1 px-4 py-4 sm:min-h-[19.5rem] sm:px-5">
        {LINES.map((line, i) => {
          if (t < line.at) return null
          if (line.kind === 'cmd') {
            const chars = Math.floor((t - line.at) / line.speed)
            const typing = chars < line.text.length
            return (
              <p key={i} className={i > 0 ? 'pt-3' : ''}>
                <Prompt />
                <span className="text-fg">{line.text.slice(0, chars)}</span>
                {typing && <span className="ml-px inline-block h-[1em] w-[0.5em] translate-y-[0.15em] bg-brand-soft" />}
              </p>
            )
          }
          if (line.kind === 'out') {
            return (
              <p key={i} className="text-brand-soft">
                {line.text}
              </p>
            )
          }
          return (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex gap-2"
            >
              <span className="w-[5.6rem] shrink-0 text-dim sm:w-[6.5rem]">{line.label}:</span>
              {line.status ? (
                <span className="flex items-center gap-2 text-emerald-300">
                  <span className="relative flex size-2">
                    <span className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald-400" />
                    <span className="relative size-2 rounded-full bg-emerald-400" />
                  </span>
                  {line.value}
                </span>
              ) : (
                <span className="text-fg/90">{line.value}</span>
              )}
            </motion.p>
          )
        })}
        {t >= TOTAL && (
          <p className="pt-3">
            <Prompt />
            <span className="inline-block h-[1em] w-[0.5em] translate-y-[0.15em] animate-blink bg-brand-soft" />
          </p>
        )}
      </div>
    </div>
  )
}

const FLOATERS = [
  { label: 'Kubernetes', className: '-left-8 -top-5', delay: '0s' },
  { label: 'React', className: '-right-5 -top-6', delay: '-2.5s' },
  { label: 'Java', className: '-right-9 bottom-[16%]', delay: '-4s' },
  { label: 'Docker', className: '-left-7 -bottom-5', delay: '-1.2s' },
]

function HeroVisual({ ready }: { ready: boolean }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const spring = { stiffness: 150, damping: 18, mass: 0.5 }
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), spring)
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-11, 11]), spring)

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      variants={fadeUp}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto w-full max-w-[30rem] [perspective:1200px] lg:mx-0 lg:ml-auto"
    >
      {/* orbit rings + glow */}
      <div aria-hidden className="absolute left-1/2 top-1/2 size-[118%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 animate-spin-slow rounded-full border border-brand/15">
          <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_14px_3px_rgb(232_121_249/0.8)]" />
        </div>
        <div className="absolute inset-[11%] animate-spin-slow rounded-full border border-dashed border-brand/20 [animation-direction:reverse] [animation-duration:60s]">
          <span className="absolute bottom-0 left-1/2 size-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-soft shadow-[0_0_12px_3px_rgb(196_181_253/0.8)]" />
        </div>
        <div className="absolute inset-[18%] rounded-full bg-brand/25 blur-[70px]" />
      </div>

      <motion.div
        style={{ rotateX, rotateY }}
        className="relative overflow-hidden rounded-2xl border border-brand/25 bg-[#0b0718]/90 shadow-[0_40px_90px_-30px_rgb(124_58_237/0.7)] backdrop-blur-md"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-soft/70 to-transparent" />
        <Terminal ready={ready} />
      </motion.div>

      {FLOATERS.map((chip) => (
        <span
          key={chip.label}
          aria-hidden
          style={{ animationDelay: chip.delay }}
          className={`absolute hidden animate-float rounded-full border border-brand/30 bg-raised/90 px-3 py-1.5 font-mono text-[0.7rem] text-brand-soft shadow-lg backdrop-blur sm:block ${chip.className}`}
        >
          {chip.label}
        </span>
      ))}
    </motion.div>
  )
}

/* --------------------------------- hero ---------------------------------- */

const STATS = [
  { icon: CalendarClock, value: <CountUp to={years} suffix="+" />, label: 'Years in engineering' },
  {
    icon: Award,
    value: <CountUp to={awards.aom.months.length} suffix="×" />,
    label: 'Achiever of the Month',
  },
  { icon: BadgeCheck, value: <CountUp to={certifications.length} />, label: 'Certifications' },
  { icon: Trophy, value: '1st', label: 'AI Hackathon 2024' },
]

export function Hero({ ready }: { ready: boolean }) {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-x-clip pb-20 pt-28 sm:pt-32"
    >
      <motion.div
        variants={stagger(0.1, 0.15)}
        initial="hidden"
        animate={ready ? 'show' : 'hidden'}
        className="container-x"
      >
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div>
            <motion.a
              variants={fadeUp}
              href={profile.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-brand/25 bg-brand/10 py-1.5 pl-3 pr-4 font-mono text-[0.7rem] text-brand-soft transition-colors hover:border-brand/60 sm:text-xs"
            >
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald-400" />
                <span className="relative size-2 rounded-full bg-emerald-400" />
              </span>
              Manager Software Development @ {profile.company}
            </motion.a>

            <motion.p variants={fadeUp} className="mt-7 text-lg text-muted sm:text-xl">
              Hi, I&apos;m
            </motion.p>
            <h1 className="mt-1 font-display text-[clamp(3.2rem,10.5vw,6.4rem)] font-bold leading-[1] tracking-tight">
              <span className="block overflow-hidden pb-[0.14em]">
                <motion.span variants={rise} className="block">
                  {profile.firstName}
                </motion.span>
              </span>
              <span className="-mt-[0.14em] block overflow-hidden pb-[0.1em]">
                <motion.span variants={rise} className="text-gradient block">
                  {profile.lastName}
                </motion.span>
              </span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 flex min-h-[1.9em] items-center font-mono text-sm text-brand-soft sm:text-lg"
            >
              <span className="mr-2 text-dim">&gt;</span>
              <Typewriter words={profile.roles} start={ready} />
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.headline}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
              <a href="#experience" className="btn btn-primary">
                View my journey <ArrowDown size={16} />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in touch <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>

          <HeroVisual ready={ready} />
        </div>

        <motion.div
          variants={stagger(0.08)}
          className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 lg:grid-cols-4 lg:gap-4"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="card flex items-center gap-3.5 px-4 py-4 sm:px-5"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand-soft">
                <stat.icon size={18} />
              </span>
              <div className="min-w-0">
                <p className="font-display text-2xl font-bold leading-none sm:text-[1.7rem]">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[0.7rem] leading-tight text-muted sm:text-xs">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
