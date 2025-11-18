import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance projects in 2025
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
            Hi, I’m Nova — a creative web developer crafting playful, performant experiences.
          </h1>
          <p className="mt-5 text-lg leading-7 text-slate-300">
            I blend modern design, interactive 3D, and rock-solid engineering to ship delightful products.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center rounded-xl px-5 py-3 bg-white text-slate-900 font-medium shadow-lg shadow-white/20 hover:shadow-white/30 transition-shadow">
              See my work
            </a>
            <a href="#contact" className="inline-flex items-center rounded-xl px-5 py-3 border border-white/15 text-white hover:bg-white/10">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 blur-3xl opacity-60" style={{
        background: 'radial-gradient(60%_60%_at_50%_0%, rgba(56,189,248,0.35) 0%, rgba(217,70,239,0.35) 40%, rgba(251,191,36,0.35) 70%, transparent 90%)'
      }} />
    </section>
  )
}
