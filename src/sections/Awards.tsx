import { motion } from 'motion/react'
import { ArrowUpRight, Award, Medal, ScrollText, Trophy } from 'lucide-react'
import { CountUp } from '../components/CountUp'
import { SectionHeading } from '../components/SectionHeading'
import { SpotlightCard } from '../components/SpotlightCard'
import { awards } from '../data/profile'
import { fadeUp, popIn, stagger, viewportOnce } from '../lib/motion'

export function Awards() {
  const { headline, aom, publication, others } = awards

  return (
    <section id="awards" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading index="06" eyebrow="Recognition" title="Awards and" accent="publications.">
          Moments where the work got noticed — on the job, on stage and in print.
        </SectionHeading>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-4 lg:grid-cols-3"
        >
          {/* hackathon */}
          <motion.div variants={fadeUp} className="lg:row-span-2">
            <SpotlightCard className="group relative flex h-full flex-col items-center justify-center overflow-hidden px-6 py-12 text-center">
              <div className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[70px] transition-opacity duration-700 group-hover:opacity-100 lg:opacity-70" />
              <div className="relative">
                <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-brand/40 [animation-duration:24s]" />
                <span className="relative m-3 grid size-24 place-items-center rounded-full bg-gradient-to-br from-accent via-brand to-brand-deep text-white shadow-[0_0_50px_rgb(168_85_247/0.7)] transition-transform duration-500 group-hover:scale-110">
                  <Trophy size={40} strokeWidth={1.6} />
                </span>
              </div>
              <p className="relative mt-7 font-mono text-xs uppercase tracking-[0.28em] text-brand-soft">
                {headline.year}
              </p>
              <h3 className="text-gradient relative mt-2 text-4xl font-bold sm:text-5xl">
                {headline.title}
              </h3>
              <p className="relative mt-3 font-display text-lg font-medium">{headline.event}</p>
            </SpotlightCard>
          </motion.div>

          {/* achiever of the month */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <SpotlightCard className="flex h-full flex-col justify-center gap-6 p-6 sm:p-8">
              <div className="flex items-center gap-5">
                <span className="text-gradient font-display text-7xl font-bold leading-none sm:text-8xl">
                  <CountUp to={aom.months.length} suffix="×" duration={1.2} />
                </span>
                <div>
                  <p className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-brand-soft">
                    <Award size={14} className="shrink-0 text-brand" />
                    {aom.org}
                  </p>
                  <h3 className="mt-1.5 text-xl font-semibold leading-snug sm:text-2xl">
                    {aom.title}
                  </h3>
                </div>
              </div>
              <motion.ul variants={stagger(0.07, 0.2)} className="flex flex-wrap gap-2">
                {aom.months.map((month) => (
                  <motion.li key={month} variants={popIn} className="chip">
                    {month}
                  </motion.li>
                ))}
              </motion.ul>
            </SpotlightCard>
          </motion.div>

          {/* publication */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <SpotlightCard className="group h-full p-6 sm:p-8">
              <a
                href={publication.href}
                target="_blank"
                rel="noreferrer"
                className="relative z-10 flex h-full gap-5"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand/30 to-brand-deep/10 text-brand-soft ring-1 ring-brand/30">
                  <ScrollText size={22} />
                </span>
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-brand-soft">
                    Publication
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug sm:text-xl">
                    {publication.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-muted transition-colors group-hover:text-brand-soft">
                    {publication.venue}
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </p>
                </div>
              </a>
            </SpotlightCard>
          </motion.div>

          {/* exhibition awards */}
          {others.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <SpotlightCard className="flex h-full items-start gap-4 p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand-soft">
                  <Medal size={20} />
                </span>
                <div>
                  <p className="font-display text-2xl font-bold leading-none text-brand-soft">
                    {item.place}
                  </p>
                  <h3 className="mt-2 font-display text-[0.98rem] font-medium leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{item.event}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
