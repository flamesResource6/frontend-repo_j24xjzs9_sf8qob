import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleNav(e, '#home')} className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-sky-500 via-fuchsia-500 to-amber-400 shadow-lg shadow-sky-500/30" />
          <span className="font-semibold tracking-tight text-white">dev.play</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="text-slate-200/90 hover:text-white px-3 py-2 rounded-lg transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white border border-white/10 hover:border-white/20 hover:bg-white/15 transition-colors"
          >
            Let’s talk
          </a>
        </div>
        <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-lg text-white/90 hover:bg-white/10">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur p-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="block px-3 py-3 rounded-lg text-slate-200/90 hover:text-white hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="block mt-2 px-3 py-3 rounded-xl bg-white/10 text-white border border-white/10 hover:border-white/20 hover:bg-white/15"
            >
              Let’s talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
