import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="prose prose-invert max-w-none"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About</h2>
            <p className="text-slate-300 leading-7">
              I build modern web apps with a strong emphasis on motion, accessibility, and maintainability.
              My toolkit includes React, TypeScript, Tailwind, and 3D on the web.
            </p>
            <p className="text-slate-300 leading-7">
              I love designing developer-first DX, shipping fast, and iterating with data.
            </p>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {["Animation-first UI", "3D interactions", "Design systems", "Full-stack web", "Web performance", "A11y & UX"].map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200">
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 blur-3xl opacity-40" style={{
        background: 'radial-gradient(60%_60%_at_50%_0%, rgba(34,197,94,0.25) 0%, rgba(56,189,248,0.25) 40%, rgba(99,102,241,0.25) 70%, transparent 90%)'
      }} />
    </section>
  )
}
