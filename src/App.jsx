import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div aria-hidden className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(56,189,248,0.08),rgba(217,70,239,0.06),transparent_70%)]" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
        <footer className="py-10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Nova — Built with love, motion and great coffee.
        </footer>
      </main>
    </div>
  )
}

export default App
