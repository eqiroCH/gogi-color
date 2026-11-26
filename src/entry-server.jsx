import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export { routes, notFound } from './routes'
export { site } from './site'
export { services, servicePages } from './content/services'
export { gemeinden } from './content/area'

export const render = (path) =>
  renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  )
