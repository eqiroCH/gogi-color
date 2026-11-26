// Rendert jede Route nach dem Build zu statischem HTML (inkl. <head>, JSON-LD und Sitemap)
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')
const { render, routes, notFound, site, servicePages, gemeinden } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

const esc = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const pageUrl = (route) => `${site.url}${route}`
const jsonLd = (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`

const businessId = `${site.url}/#business`
const business = {
  '@context': 'https://schema.org',
  '@type': 'HousePainter',
  '@id': businessId,
  name: site.name,
  url: pageUrl('/'),
  image: pageUrl('/images/og-image.jpg'),
  email: site.email,
  ...(site.phone && { telephone: site.phone }),
  address: {
    '@type': 'PostalAddress',
    ...(site.street && { streetAddress: site.street }),
    ...(site.zip && { postalCode: site.zip }),
    addressLocality: site.city,
    addressRegion: 'ZH',
    addressCountry: 'CH',
  },
  areaServed: ['Zürich', ...gemeinden].map((name) => ({ '@type': 'City', name })),
  sameAs: [site.instagram, site.facebook].filter(Boolean),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Malerarbeiten',
    itemListElement: servicePages.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.name, url: pageUrl(`/${service.slug}`) },
    })),
  },
}

const structuredData = (route, meta) => {
  if (route === '/') return [business]
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: pageUrl('/') },
        { '@type': 'ListItem', position: 2, name: meta.name, item: pageUrl(route) },
      ],
    },
  ]
  const service = servicePages.find((s) => `/${s.slug}` === route)
  if (service) {
    data.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.page.metaDescription,
      url: pageUrl(route),
      provider: { '@id': businessId },
      areaServed: { '@type': 'City', name: 'Zürich' },
    })
  }
  return data
}

const head = (route, meta, extra = '') =>
  [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    route && `<link rel="canonical" href="${pageUrl(route)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    route && `<meta property="og:url" content="${pageUrl(route)}" />`,
    route === '/' && '<link rel="preload" as="image" href="/images/hero.webp" fetchpriority="high" />',
    extra,
  ]
    .filter(Boolean)
    .join('\n    ')

const page = (headHtml, body) =>
  template
    .replace('<!--app-head-->', headHtml)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)

for (const [route, meta] of Object.entries(routes)) {
  const ld = structuredData(route, meta).map(jsonLd).join('\n    ')
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`
  await fs.writeFile(path.join(dist, file), page(head(route, meta, ld), render(route)))
  console.log(`prerendered ${route} → ${file}`)
}

await fs.writeFile(
  path.join(dist, '404.html'),
  page(head(null, notFound, '<meta name="robots" content="noindex" />'), render('/404')),
)

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(routes)
  .map((route) => `  <url><loc>${pageUrl(route)}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>
`
await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap)
await fs.rm(ssrDir, { recursive: true, force: true })
