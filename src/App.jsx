// Seitenrahmen und Routing. Jede Route wird beim Build vorgerendert (scripts/prerender.mjs)
// und im Browser hydriert – deshalb hier keine Browser-APIs während des Renderns.
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileBar from './components/MobileBar'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import Kosten from './pages/Kosten'
import Einsatzgebiet from './pages/Einsatzgebiet'
import Offerte from './pages/Offerte'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import NotFound from './pages/NotFound'
import { servicePages } from './content/services'

const pages = {
  '/': Home,
  '/kosten': Kosten,
  '/einsatzgebiet': Einsatzgebiet,
  '/offerte': Offerte,
  '/impressum': Impressum,
  '/datenschutz': Datenschutz,
  ...Object.fromEntries(
    servicePages.map((service) => [`/${service.slug}`, () => <ServicePage service={service} />]),
  ),
}

function App({ path }) {
  const Page = pages[path] ?? NotFound

  // Bei /seite#abschnitt nach dem Hydrieren direkt zum Abschnitt springen
  // (ohne sanftes Scrollen, das sonst sichtbar durch die ganze Seite läuft)
  useEffect(() => {
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: 'instant' })
    }
  }, [])

  return (
    <>
      <Header path={path} />
      <main id="inhalt">
        <Page />
      </main>
      <Footer />
      <MobileBar path={path} />
    </>
  )
}

export default App
