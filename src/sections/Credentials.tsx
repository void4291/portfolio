import { motion } from 'motion/react'
import { ArrowUpRight, BadgeCheck, GraduationCap, Presentation } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SpotlightCard } from '../components/SpotlightCard'
import { certifications, education, trainings } from '../data/profile'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export function Credentials() {
  return (
    <section id="credentials" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading index="05" eyebrow="Credentials" title="Certifications," accent="training and education.">
          Formal learning behind the practice — from Kubernetes administration to IBM BPM.
        </SectionHeading>

        {/* certifications */}
        <motion.div
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.title} variants={fadeUp}>
              <SpotlightCard className="group flex h-full gap-4 p-5 sm:p-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand/30 to-brand-deep/10 text-brand-soft ring-1 ring-brand/30 transition-transform duration-500 group-hover:rotate-12">
                  <BadgeCheck size={22} />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.68rem] uppercase tracking-[0.14em]">
                    <span className="text-brand-soft">{cert.date}</span>
                    <span className="text-dim">{cert.note}</span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold leading-snug sm:text-lg">
                    {cert.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{cert.issuer}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {/* education */}
          <Reveal>
            <SpotlightCard lift={false} className="h-full p-6 sm:p-7">
              <h3 className="flex items-center gap-3 text-lg font-semibold">
                <GraduationCap size={20} className="text-brand" /> Education
              </h3>
              <ol className="relative mt-6 space-y-7 border-l border-brand/20 pl-6">
                {education.map((item) => (
                  <li key={item.school} className="relative">
                    <span className="absolute -left-[1.82rem] top-1.5 size-2.5 rounded-full border-2 border-brand bg-bg" />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link inline-flex items-center gap-1 font-display font-medium leading-snug transition-colors hover:text-brand-soft"
                      >
                        {item.school}
                        <ArrowUpRight
                          size={14}
                          className="shrink-0 text-dim transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </a>
                      <span className="font-mono text-xs text-dim">{item.date}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{item.degree}</p>
                    <span className="chip mt-2.5">{item.score}</span>
                  </li>
                ))}
              </ol>
            </SpotlightCard>
          </Reveal>

          {/* trainings */}
          <Reveal delay={0.1}>
            <SpotlightCard lift={false} className="h-full p-6 sm:p-7">
              <h3 className="flex items-center gap-3 text-lg font-semibold">
                <Presentation size={20} className="text-brand" /> Professional training
              </h3>
              <ul className="mt-6 divide-y divide-brand/10">
                {trainings.map((item) => (
                  <li key={item.title} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] ${
                          item.kind === 'Conducted'
                            ? 'border border-accent/40 bg-accent/10 text-accent'
                            : 'border border-brand/25 bg-brand/10 text-brand-soft'
                        }`}
                      >
                        {item.kind}
                      </span>
                      <span className="font-mono text-xs text-dim">{item.when}</span>
                    </div>
                    <p className="mt-2 font-display font-medium leading-snug">
                      {item.title} <span className="text-dim">· {item.org}</span>
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.text}</p>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
