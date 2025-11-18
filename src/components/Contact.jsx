import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s build something delightful</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Have a project in mind? I’m currently open for select freelance work and collaborations.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap justify-center">
            <a href="mailto:hello@example.com" className="inline-flex items-center rounded-xl px-5 py-3 bg-white text-slate-900 font-medium shadow-lg shadow-white/20 hover:shadow-white/30 transition-shadow">
              Email me
            </a>
            <a href="#" className="inline-flex items-center rounded-xl px-5 py-3 border border-white/15 text-white hover:bg-white/10">
              View resume
            </a>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 blur-3xl opacity-40" style={{
        background: 'radial-gradient(60%_60%_at_50%_0%, rgba(34,197,94,0.25) 0%, rgba(56,189,248,0.25) 40%, rgba(217,70,239,0.25) 70%, transparent 90%)'
      }} />
    </section>
  )
}
