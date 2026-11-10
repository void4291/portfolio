import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'motion/react'
import { Background } from './components/Background'
import { CursorGlow } from './components/CursorGlow'
import { BackToTop, Footer } from './components/Footer'
import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Awards } from './sections/Awards'
import { Contact } from './sections/Contact'
import { Credentials } from './sections/Credentials'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Skills } from './sections/Skills'
import { Work } from './sections/Work'

const SEEN_KEY = 'portfolio:intro-seen'

/** Show the intro once per session, and never when the visitor prefers reduced motion. */
function shouldShowIntro(): boolean {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  try {
    return sessionStorage.getItem(SEEN_KEY) !== '1'
  } catch {
    return true
  }
}

export default function App() {
  const [loading, setLoading] = useState(shouldShowIntro)

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem(SEEN_KEY, '1')
    } catch {
      /* storage unavailable — the intro simply replays next visit */
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <Loader key="loader" onDone={finishIntro} />}</AnimatePresence>

      <Background />
      <CursorGlow />
      <Navbar ready={!loading} />

      <main className="relative z-10">
        <Hero ready={!loading} />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Credentials />
        <Awards />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <BackToTop />
    </MotionConfig>
  )
}
