// STUB – die vollständige Seite /kosten baut ein anderer Agent.
import PageHeader from '../components/PageHeader'
import { IconArrowRight } from '../components/Icons'
import { kosten } from '../content/pages'

export default function Kosten() {
  const { hero } = kosten
  return (
    <PageHeader breadcrumb="Kosten" eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead}>
      <a href="/offerte" className="btn btn--primary btn--lg">
        Offerte anfragen
        <IconArrowRight />
      </a>
      <a href="#richtwerte" className="btn btn--secondary btn--lg">
        {hero.secondaryCta}
      </a>
    </PageHeader>
  )
}
