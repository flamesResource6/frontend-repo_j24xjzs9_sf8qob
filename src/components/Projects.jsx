import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Playful 3D Storefront',
    desc: 'E-commerce concept with real-time 3D product exploration and buttery-smooth transitions.',
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Edge-powered analytics with streaming charts and micro-interactions.',
  },
  {
    title: 'Dev Tools Suite',
    desc: 'Design system + CLI + docs that ship together with world-class DX.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected work</h2>
            <p className="mt-2 text-slate-300">A few things I’ve built recently.</p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{
                background: 'radial-gradient(60%_60%_at_50%_-10%, rgba(56,189,248,0.35) 0%, rgba(217,70,239,0.35) 40%, rgba(251,191,36,0.35) 70%, transparent 90%)'
              }} />
              <h3 className="relative z-10 text-xl font-semibold text-white">{p.title}</h3>
              <p className="relative z-10 mt-2 text-slate-300">{p.desc}</p>
              <div className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm text-white/90">
                <span className="h-2 w-2 rounded-full bg-white/70" />
                Case study coming soon
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 blur-3xl opacity-40" style={{
        background: 'radial-gradient(60%_60%_at_50%_0%, rgba(236,72,153,0.25) 0%, rgba(56,189,248,0.25) 40%, rgba(139,92,246,0.25) 70%, transparent 90%)'
      }} />
    </section>
  )
}
