import CaseHero from '../components/CaseHero'
import CaseIntro from '../components/CaseIntro'
import CaseEditorial from '../components/CaseEditorial'
import CaseSection from '../components/CaseSection'
import ExternalLinks from '../components/ExternalLinks'
import CaseNavigation from '../components/CaseNavigation'
import MetricGrid from '../components/MetricGrid'
import MetricItem from '../components/MetricItem'
import { images } from '../data/images'

const portraitIndexes = new Set([0, 4, 7, 10, 12, 13, 14, 15])

const cineCampusGallery = images.cinecampus.map((src, index) => ({
  src,
  alt: `Registro ou peça de comunicação do CineCampus UNEB ${index + 1}`,
  label: index === 0 ? 'CineCampus UNEB' : undefined,
  ratio: portraitIndexes.has(index) ? 'portrait' as const : 'detail' as const,
  align: portraitIndexes.has(index) ? 'top' as const : 'center' as const,
}))

export default function CineCampusCase() {
  return (
    <article className="case-page">
      <CaseHero number="04" title="CINECAMPUS UNEB" category="PRODUÇÃO CULTURAL / EVENTOS / SOCIAL MEDIA / DESIGN" meta={[{ label: 'FUNÇÕES', value: 'IDEALIZADORA / PRODUTORA / SOCIAL MEDIA / DESIGNER GRÁFICA' }, { label: 'PERÍODO', value: '2025—2026' }]} image={images.cinecampus[12]} imageAlt="Identidade do CineCampus UNEB" />
      <CaseIntro context="Projeto cultural desenvolvido na disciplina de Eventos da graduação em Relações Públicas da UNEB, com sessões gratuitas de cinema nacional no Teatro UNEB." responsibilities={['Idealização e produção do projeto', 'Planejamento orçamentário e programação', 'Execução das sessões', 'Estratégia de divulgação', 'Identidade visual e peças digitais']} />
      <CaseSection label="ALCANCE E PÚBLICO" title="Cinema nacional em Salvador" intro="Uma sessão no Teatro UNEB conectou a programação do CineCampus a um público local e presencial.">
        <MetricGrid className="metric-grid-featured">
          <MetricItem value="8,9 mil" label="contas alcançadas" size="primary" />
          <MetricItem value="88,7%" label="da audiência em Salvador" size="primary" />
          <MetricItem value="120" label="pessoas no público presencial" detail="Sessão com Saneamento Básico no Teatro UNEB" size="primary" />
        </MetricGrid>
      </CaseSection>
      <CaseEditorial id="cinecampus" title="CINECAMPUS UNEB" period="2025—2026" areas={['Produção cultural', 'Eventos', 'Social media', 'Design']} description="Projeto cultural desenvolvido na disciplina de Eventos da graduação em Relações Públicas da UNEB, com sessões gratuitas de cinema nacional no Teatro UNEB." images={cineCampusGallery} />
      <ExternalLinks links={[{ label: 'INSTAGRAM', href: 'https://www.instagram.com/cinecampusuneb/' }]} />
      <CaseNavigation previous={{ label: 'CASE ANTERIOR', title: 'CÂMARA MUNICIPAL DE SALVADOR', to: '/projetos/camara-municipal' }} next={{ label: 'VOLTAR AO PRIMEIRO CASE', title: 'AMARA NZERO', to: '/projetos/amara-nzero' }} />
    </article>
  )
}
