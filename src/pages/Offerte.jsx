// STUB – die vollständige Seite /offerte (mit OfferForm) baut ein anderer Agent.
import PageHeader from '../components/PageHeader'
import { offerte } from '../content/pages'

export default function Offerte() {
  return <PageHeader breadcrumb={offerte.title} eyebrow={offerte.eyebrow} title={offerte.title} lead={offerte.lead} />
}
