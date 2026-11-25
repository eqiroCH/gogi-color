import { useEffect } from 'react'
import Navbar from './components/Navbar'
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

  // Bei /seite#abschnitt erst nach dem Hydrieren zum Abschnitt springen
  useEffect(() => {
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
    }
  }, [])

  return (
    <>
      <Navbar path={path} />
      <main>
        <Page />
      </main>
      <Footer />
      <MobileBar hidden={path === '/offerte'} />
    </>
  )
}

export default App
