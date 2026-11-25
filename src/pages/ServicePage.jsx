// STUB – die vollständige Leistungsseite baut ein anderer Agent.
// Props: service – Eintrag aus content/services.js (mit `page`)
import PageHeader from '../components/PageHeader'
import { IconArrowRight } from '../components/Icons'
import { servicePageLabels } from '../content/pages'

export default function ServicePage({ service }) {
  const { page } = service
  return (
    <PageHeader
      breadcrumb={service.name}
      eyebrow={service.name}
      title={page.title}
      lead={page.lead}
      image={{ src: service.image, width: 800, height: 600, alt: service.alt }}
      highlights={page.highlights}
    >
      <a href={`/offerte?leistung=${service.slug}`} className="btn btn--primary btn--lg">
        {servicePageLabels.primaryCta}
        <IconArrowRight />
      </a>
      <a href="#leistungsumfang" className="btn btn--secondary btn--lg">
        {servicePageLabels.secondaryCta}
      </a>
    </PageHeader>
  )
}
