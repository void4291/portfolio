import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { easeOut } from '../lib/motion'

const SECTION_IDS = ['home', ...navItems.map((item) => item.id)]

export function Navbar({ ready }: { ready: boolean }) {
  const active = useActiveSection(SECTION_IDS)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-brand-deep via-brand to-accent"
      />

      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : undefined}
        transition={{ duration: 0.8, ease: easeOut, delay: 0.15 }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border py-2 pl-2.5 pr-2 transition-[background,border-color,box-shadow] duration-500 ${
            scrolled || open
              ? 'border-brand/20 bg-surface/75 shadow-[0_12px_40px_-18px_rgb(0_0_0/0.9)] backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <a href="#home" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-deep font-display text-sm font-bold text-white shadow-[0_0_18px_rgb(168_85_247/0.55)] transition-transform duration-500 group-hover:rotate-[360deg]">
              {profile.initials}
            </span>
            <span className="font-display text-[0.95rem] font-semibold tracking-tight">
              {profile.firstName}
              <span className="text-brand">.</span>
            </span>
          </a>

          <ul className="hidden items-center lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`relative block rounded-full px-3.5 py-2 text-[0.82rem] font-medium transition-colors ${
                    active === item.id ? 'text-white' : 'text-muted hover:text-fg'
                  }`}
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-brand/40 bg-brand/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-primary hidden px-4 py-2.5 text-[0.82rem] lg:inline-flex">
            Let&apos;s talk
          </a>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-brand/25 bg-white/[0.04] text-fg lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: easeOut }}
              className="mx-auto mt-2 max-w-5xl rounded-3xl border border-brand/20 bg-surface/90 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
            >
              <ul className="grid gap-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium ${
                        active === item.id ? 'bg-brand/20 text-white' : 'text-muted'
                      }`}
                    >
                      {item.label}
                      <span className="font-mono text-xs text-dim">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
