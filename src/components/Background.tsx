import { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  r: number
  depth: number
  phase: number
  speed: number
  tint: string
}

type Meteor = { x: number; y: number; vx: number; vy: number; life: number; max: number }

const TINTS = ['241 236 255', '196 181 253', '192 132 252', '232 121 249']

/** Fixed full-viewport backdrop: aurora glows, a faint grid and a twinkling starfield. */
export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let stars: Star[] = []
    let meteor: Meteor | null = null
    let nextMeteor = 4000
    let frame = 0
    let last = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(190, Math.round((width * height) / 8500))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.35 + Math.random() * 1.25,
        depth: 0.15 + Math.random() * 0.85,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 1.4,
        tint: TINTS[Math.floor(Math.random() * TINTS.length)],
      }))
    }

    const draw = (time: number) => {
      const dt = Math.min(time - last, 60)
      last = time
      ctx.clearRect(0, 0, width, height)

      const scroll = window.scrollY
      for (const s of stars) {
        // Slow drift plus scroll parallax, wrapped to the viewport.
        s.x += s.depth * 0.012 * dt
        if (s.x > width + 2) s.x = -2
        const y = (((s.y - scroll * s.depth * 0.12) % height) + height) % height
        const twinkle = 0.55 + 0.45 * Math.sin(time * 0.001 * s.speed + s.phase)
        ctx.beginPath()
        ctx.arc(s.x, y, s.r * (0.6 + s.depth * 0.6), 0, Math.PI * 2)
        ctx.fillStyle = `rgb(${s.tint} / ${(0.25 + s.depth * 0.6) * twinkle})`
        ctx.fill()
      }

      // Occasional shooting star.
      nextMeteor -= dt
      if (!meteor && nextMeteor <= 0) {
        meteor = {
          x: width * (0.2 + Math.random() * 0.7),
          y: -20,
          vx: -0.35 - Math.random() * 0.2,
          vy: 0.3 + Math.random() * 0.15,
          life: 0,
          max: 900 + Math.random() * 500,
        }
        nextMeteor = 6000 + Math.random() * 7000
      }
      if (meteor) {
        meteor.life += dt
        meteor.x += meteor.vx * dt
        meteor.y += meteor.vy * dt
        const fade = Math.sin((meteor.life / meteor.max) * Math.PI)
        const tailX = meteor.x - meteor.vx * 220
        const tailY = meteor.y - meteor.vy * 220
        const gradient = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY)
        gradient.addColorStop(0, `rgb(245 208 254 / ${0.9 * fade})`)
        gradient.addColorStop(1, 'rgb(168 85 247 / 0)')
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.4
        ctx.beginPath()
        ctx.moveTo(meteor.x, meteor.y)
        ctx.lineTo(tailX, tailY)
        ctx.stroke()
        if (meteor.life >= meteor.max) meteor = null
      }

      if (!reduce) frame = requestAnimationFrame(draw)
    }

    const start = () => {
      cancelAnimationFrame(frame)
      last = performance.now()
      frame = requestAnimationFrame(draw)
    }
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(frame)
      else start()
    }
    const onResize = () => {
      resize()
      if (reduce) start()
    }

    resize()
    start()
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-[15%] -top-[20%] size-[60vmax] animate-aurora rounded-full bg-[radial-gradient(circle,rgb(124_58_237/0.28),transparent_62%)] blur-3xl" />
      <div className="absolute -right-[20%] top-[25%] size-[55vmax] animate-aurora rounded-full bg-[radial-gradient(circle,rgb(192_38_211/0.16),transparent_62%)] blur-3xl [animation-delay:-8s] [animation-duration:28s]" />
      <div className="absolute -bottom-[30%] left-[20%] size-[50vmax] animate-aurora rounded-full bg-[radial-gradient(circle,rgb(79_70_229/0.18),transparent_62%)] blur-3xl [animation-delay:-14s] [animation-duration:34s]" />
      <div className="grid-backdrop absolute inset-0" />
      <canvas ref={canvasRef} className="absolute inset-0 size-full" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgb(7_4_15/0.75))]" />
    </div>
  )
}
