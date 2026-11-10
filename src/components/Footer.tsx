import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { navItems, profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="relative border-t border-brand/10 py-10">
      <div className="container-x flex flex-col items-center gap-6 text-sm text-dim md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} <span className="text-muted">{profile.name}</span>. All
          rights reserved.
        </p>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="transition-colors hover:text-brand-soft">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-mono text-xs">Built with React · Tailwind · Motion</p>
      </div>
    </footer>
  )
}

/** Floating button that appears after scrolling past the hero. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#home"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -4 }}
          className="fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-full border border-brand/40 bg-raised/90 text-brand-soft shadow-[0_10px_30px_-10px_rgb(168_85_247/0.8)] backdrop-blur sm:bottom-7 sm:right-7"
        >
          <ArrowUp size={18} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
