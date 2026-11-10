import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, Check, Copy, FileText, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../components/icons'
import { profile } from '../data/profile'
import { fadeUp, rise, stagger, viewportOnce } from '../lib/motion'

export function Contact() {
  const { email, linkedin, github, resume } = profile.links
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  const socials = [
    linkedin && { label: 'LinkedIn', href: linkedin, icon: <LinkedInIcon className="size-4" /> },
    github && { label: 'GitHub', href: github, icon: <GitHubIcon className="size-4" /> },
    resume && { label: 'Résumé', href: resume, icon: <FileText size={16} /> },
  ].filter((item): item is { label: string; href: string; icon: React.JSX.Element } => Boolean(item))

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-x">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-[2rem] border border-brand/25 bg-gradient-to-b from-raised/90 to-surface/80 px-6 py-16 text-center backdrop-blur-md sm:px-12 sm:py-24"
        >
          {/* glow + rings */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-soft to-transparent" />
            <div className="absolute left-1/2 top-[-45%] size-[38rem] -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
            <div className="absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-brand/15" />
            <div className="absolute left-1/2 top-1/2 size-[48rem] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-brand/10 [animation-direction:reverse] [animation-duration:70s]" />
          </div>

          <div className="relative">
            <motion.p variants={fadeUp} className="eyebrow justify-center">
              <span className="text-dim">07</span>Contact
            </motion.p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
              <span className="block overflow-hidden pb-[0.12em]">
                <motion.span variants={rise} className="block">
                  Let&apos;s build something
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.16em]">
                <motion.span variants={rise} className="text-gradient block">
                  that scales.
                </motion.span>
              </span>
            </h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              A platform to build, a team to grow or an architecture to untangle — I&apos;m always
              happy to talk engineering.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-3">
              {email && (
                <>
                  <a
                    href={`mailto:${email}`}
                    className="btn btn-primary max-w-full text-[0.8rem] sm:text-[0.9rem]"
                  >
                    <Mail size={16} className="shrink-0" />
                    <span className="truncate py-0.5">{email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="btn btn-ghost px-4"
                  >
                    {copied ? <Check size={16} className="text-emerald-300" /> : <Copy size={16} />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </>
              )}
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  {item.icon} {item.label}
                </a>
              ))}
              <a href={profile.companyUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
                {profile.company} <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
