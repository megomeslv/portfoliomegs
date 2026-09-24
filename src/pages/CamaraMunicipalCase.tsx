import CaseHero from '../components/CaseHero'
import CaseIntro from '../components/CaseIntro'
import CaseEditorial from '../components/CaseEditorial'
import CaseNavigation from '../components/CaseNavigation'
import { images } from '../data/images'

const camaraGallery = images.camara.map((src, index) => {
  const portrait = [1, 11, 13].includes(index)
  const square = [8, 9, 10].includes(index)
  return {
    src,
    alt: `Peça de comunicação interna da Câmara Municipal de Salvador ${index + 1}`,
    label: index === 0 ? 'Comunicação interna' : undefined,
    ratio: portrait ? 'portrait' as const : square ? 'square' as const : 'natural' as const,
    align: portrait ? 'top' as const : 'center' as const,
    fit: 'contain' as const,
  }
})

export default function CamaraMunicipalCase() {
  return (
    <article className="case-page">
      <CaseHero number="03" title={'CÂMARA MUNICIPAL\nDE SALVADOR'} category="COMUNICAÇÃO INTERNA / DESIGN GRÁFICO / ENDOMARKETING" meta={[{ label: 'CARGO', value: 'ESTAGIÁRIA DE COMUNICAÇÃO E DESIGN GRÁFICO' }, { label: 'PERÍODO', value: 'MARÇO DE 2024 — MARÇO DE 2025' }]} image={images.camara[1]} imageAlt="Projeto de comunicação interna da Câmara Municipal de Salvador" />
      <CaseIntro context="Atuação junto à Secretaria de Gestão de Pessoas, desenvolvendo comunicação interna para diferentes programas, campanhas e rotinas institucionais." responsibilities={['Campanhas internas e de conscientização', 'Identidades visuais para projetos internos', 'Peças digitais e impressas', 'Materiais informativos e institucionais', 'Apoio a demandas audiovisuais']} />
      <CaseEditorial id="camara-municipal" title="CÂMARA MUNICIPAL DE SALVADOR" period="MARÇO DE 2024 — MARÇO DE 2025" areas={['Comunicação interna', 'Design gráfico', 'Endomarketing']} description="Atuação junto à Secretaria de Gestão de Pessoas, desenvolvendo comunicação interna para diferentes programas, campanhas e rotinas institucionais." images={camaraGallery} />
      <CaseNavigation previous={{ label: 'CASE ANTERIOR', title: 'ÀROKÒ', to: '/projetos/aroko' }} next={{ label: 'PRÓXIMO CASE', title: 'CINECAMPUS UNEB', to: '/projetos/cinecampus' }} />
    </article>
  )
}
