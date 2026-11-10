import { motion } from 'motion/react'
import {
  ArrowUpRight,
  Building2,
  Code,
  Container,
  Database,
  ListChecks,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { Marquee } from '../components/Marquee'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SpotlightCard } from '../components/SpotlightCard'
import {
  aiDelivery,
  marqueeBottom,
  marqueeTop,
  skillGroups,
  type AiPractice,
  type SkillGroup,
} from '../data/profile'
import { fadeUp, popIn, stagger, viewportOnce } from '../lib/motion'

const ICONS: Record<SkillGroup['icon'], LucideIcon> = {
  code: Code,
  container: Container,
  building: Building2,
  database: Database,
  wrench: Wrench,
  users: Users,
}

const AI_ICONS: Record<AiPractice['icon'], LucideIcon> = {
  workflow: Workflow,
  rocket: Rocket,
  list: ListChecks,
  shield: ShieldCheck,
}

/** Featured, full-width block on AI-assisted engineering. */
function AiDelivery() {
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mb-4"
    >
      <motion.div variants={fadeUp}>
        <SpotlightCard
          lift={false}
          className="overflow-hidden border-brand/30 bg-gradient-to-br from-brand/[0.14] via-transparent to-accent/[0.06] p-6 sm:p-9"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
            <div className="absolute -right-24 -top-24 size-72 rounded-full bg-accent/15 blur-[90px]" />
            <div className="absolute -bottom-28 -left-20 size-72 rounded-full bg-brand/20 blur-[90px]" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-accent">
                <Sparkles size={13} className="animate-pulse" />
                {aiDelivery.eyebrow}
              </p>
              <h3 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">
                Orchestrating development workflows with{' '}
                <span className="text-gradient">Claude Code &amp; GPT</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {aiDelivery.text}
              </p>
              <motion.ul variants={stagger(0.04, 0.25)} className="mt-6 flex flex-wrap gap-2">
                {aiDelivery.tools.map((tool) => (
                  <motion.li key={tool} variants={popIn} className="chip">
                    {tool}
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-7 border-t border-brand/15 pt-5">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-dim">
                  Tools I&apos;ve built along the way
                </p>
                <ul className="mt-3 space-y-2.5">
                  {aiDelivery.built.map((tool) => {
                    const external = tool.href.startsWith('http')
                    return (
                      <li key={tool.name}>
                        <a
                          href={tool.href}
                          {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                          className="group/tool relative z-10 flex items-start gap-2.5 text-sm"
                        >
                          <ArrowUpRight
                            size={15}
                            className="mt-0.5 shrink-0 text-brand transition-transform duration-300 group-hover/tool:-translate-y-0.5 group-hover/tool:translate-x-0.5"
                          />
                          <span className="text-muted">
                            <span className="font-display font-semibold text-fg transition-colors group-hover/tool:text-brand-soft">
                              {tool.name}
                            </span>{' '}
                            — {tool.text}
                          </span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <motion.ul variants={stagger(0.1, 0.15)} className="grid gap-3 sm:grid-cols-2">
              {aiDelivery.practices.map((practice, i) => {
                const Icon = AI_ICONS[practice.icon]
                return (
                  <motion.li
                    key={practice.title}
                    variants={fadeUp}
                    className="group rounded-2xl border border-brand/15 bg-bg/50 p-4 transition-colors duration-300 hover:border-brand/45 hover:bg-brand/[0.08] sm:p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand/35 to-brand-deep/10 text-brand-soft ring-1 ring-brand/30 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                        <Icon size={17} />
                      </span>
                      <span className="font-mono text-xs text-dim">0{i + 1}</span>
                    </div>
                    <h4 className="mt-3.5 text-[0.95rem] font-semibold leading-snug">
                      {practice.title}
                    </h4>
                    <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted">
                      {practice.text}
                    </p>
                  </motion.li>
                )
              })}
            </motion.ul>
          </div>
        </SpotlightCard>
      </motion.div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading index="04" eyebrow="Skills" title="A toolkit spanning" accent="code, cloud, AI and people.">
          Technologies and practices I&apos;ve used across development, operations and delivery —
          now amplified with AI-assisted engineering.
        </SectionHeading>
      </div>

      <Reveal className="mb-14 space-y-4 sm:mb-16">
        <Marquee items={marqueeTop} />
        <Marquee items={marqueeBottom} reverse />
      </Reveal>

      <div className="container-x">
        <AiDelivery />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const Icon = ICONS[group.icon]
            return (
              <motion.div key={group.title} variants={fadeUp}>
                <SpotlightCard className="h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand/30 to-brand-deep/10 text-brand-soft ring-1 ring-brand/30">
                      <Icon size={18} />
                    </span>
                    <h3 className="text-base font-semibold sm:text-lg">{group.title}</h3>
                    <span className="ml-auto font-mono text-xs text-dim">
                      {String(group.items.length).padStart(2, '0')}
                    </span>
                  </div>
                  <motion.ul variants={stagger(0.03, 0.15)} className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <motion.li key={skill} variants={popIn} className="chip">
                        {skill}
                      </motion.li>
                    ))}
                  </motion.ul>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
