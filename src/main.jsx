import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/archivo/wdth.css'
import './index.css'
import App from './App.jsx'
import { routes, notFound, normalizePath } from './routes'

const path = normalizePath(window.location.pathname)
const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App path={path} />
  </StrictMode>
)

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  // Dev-Server: kein vorgerendertes HTML, daher Titel hier setzen
  document.title = (routes[path] ?? notFound).title
  createRoot(root).render(app)
}
