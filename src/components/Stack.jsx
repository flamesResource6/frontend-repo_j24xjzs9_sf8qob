import { motion } from 'framer-motion'
import { Code2, Sparkles, Cpu, Rocket } from 'lucide-react'

const badges = [
  { icon: Code2, label: 'React + TypeScript' },
  { icon: Cpu, label: 'Edge & Serverless' },
  { icon: Rocket, label: 'Performance' },
  { icon: Sparkles, label: 'Motion & 3D' },
]

const tools = [
  'React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind', 'Framer Motion', 'Spline', 'Three.js', 'FastAPI', 'MongoDB'
]

export default function Stack() {
  return (
    <section id="stack" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Capabilities</h2>
            <p className="mt-2 text-slate-300">Modern stack tuned for 2025.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {badges.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90">
                <Icon size={14} /> {label}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {tools.map((t) => (
            <div key={t} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4 text-slate-200 text-sm">
              {t}
            </div>
          ))}
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 blur-3xl opacity-40" style={{
        background: 'radial-gradient(60%_60%_at_50%_0%, rgba(99,102,241,0.25) 0%, rgba(217,70,239,0.25) 40%, rgba(20,184,166,0.25) 70%, transparent 90%)'
      }} />
    </section>
  )
}
