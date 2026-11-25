// STUB – die vollständige 404-Seite baut ein anderer Agent.
import PageHeader from '../components/PageHeader'
import { IconArrowRight } from '../components/Icons'
import { notFoundPage } from '../content/pages'

export default function NotFound() {
  return (
    <PageHeader
      breadcrumb="Seite nicht gefunden"
      eyebrow={notFoundPage.eyebrow}
      title={notFoundPage.title}
      lead={notFoundPage.lead}
    >
      <a href="/" className="btn btn--primary btn--lg">
        {notFoundPage.primaryCta}
        <IconArrowRight />
      </a>
      <a href="/offerte" className="btn btn--secondary btn--lg">
        {notFoundPage.secondaryCta}
      </a>
    </PageHeader>
  )
}
