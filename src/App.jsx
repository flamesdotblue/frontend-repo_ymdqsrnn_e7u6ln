import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      {/* Simple top bar */}
      <header className="fixed inset-x-0 top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60 bg-neutral-900/50 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-white text-lg">Nova Remodel</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-200">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-white text-neutral-900 px-4 py-2 font-medium hover:bg-neutral-200 transition">Get a Quote</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-400 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p>© {new Date().getFullYear()} Nova Remodel. All rights reserved.</p>
          <p>License & Insurance • CSLB #1234567</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
