// STUB – die vollständige Seite /einsatzgebiet baut ein anderer Agent.
import PageHeader from '../components/PageHeader'
import { einsatzgebiet } from '../content/pages'

export default function Einsatzgebiet() {
  const { hero } = einsatzgebiet
  return <PageHeader breadcrumb="Einsatzgebiet" eyebrow={hero.eyebrow} title={hero.title} lead={hero.lead} />
}
