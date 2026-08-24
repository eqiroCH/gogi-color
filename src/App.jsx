import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Impressum from './components/Impressum'
import Datenschutz from './components/Datenschutz'

function App() {
  const [page, setPage] = useState('home')

  const goHome = (hash) => {
    setPage('home')
    requestAnimationFrame(() => {
      if (hash) {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
  }

  return (
    <>
      <Navbar page={page} onNavigate={goHome} />
      <main>
        {page === 'impressum' && <Impressum onBack={() => goHome()} />}
        {page === 'datenschutz' && <Datenschutz onBack={() => goHome()} />}
        {page === 'home' && (
          <>
            <Hero />
            <Services />
            <About />
            <Gallery />
            <Process />
            <FAQ />
            <Contact />
          </>
        )}
      </main>
      <Footer onNavigate={goHome} setPage={setPage} />
    </>
  )
}

export default App
