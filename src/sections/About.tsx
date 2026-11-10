import { motion } from 'motion/react'
import { Code, Layers, Server, Users, type LucideIcon } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SpotlightCard } from '../components/SpotlightCard'
import { facts, pillars, profile, type Pillar } from '../data/profile'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const ICONS: Record<Pillar['icon'], LucideIcon> = {
  users: Users,
  layers: Layers,
  server: Server,
  code: Code,
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading index="01" eyebrow="About" title="Engineering leader," accent="hands-on architect.">
          I build teams, platforms and the pipelines that keep them shipping.
        </SectionHeading>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-[1.05rem]">
              {profile.about.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <motion.dl
              variants={stagger(0.07)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-brand/15 pt-8"
            >
              {facts.map((fact) => (
                <motion.div key={fact.label} variants={fadeUp}>
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-[0.95rem] font-medium text-fg sm:text-base">
                    {fact.value}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 sm:grid-cols-2"
          >
            {pillars.map((pillar, i) => {
              const Icon = ICONS[pillar.icon]
              return (
                <motion.div key={pillar.title} variants={fadeUp} className={i % 2 === 1 ? 'sm:translate-y-8' : ''}>
                  <SpotlightCard className="group h-full p-6">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand/30 to-brand-deep/10 text-brand-soft ring-1 ring-brand/30 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{pillar.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{pillar.text}</p>
                  </SpotlightCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
