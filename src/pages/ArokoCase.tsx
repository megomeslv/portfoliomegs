import CaseHero from '../components/CaseHero'
import CaseIntro from '../components/CaseIntro'
import CaseEditorial from '../components/CaseEditorial'
import CaseSection from '../components/CaseSection'
import ExternalLinks from '../components/ExternalLinks'
import CaseNavigation from '../components/CaseNavigation'
import MetricGrid from '../components/MetricGrid'
import MetricItem from '../components/MetricItem'
import { images } from '../data/images'

const portraitIndexes = new Set([1, 2, 4, 5, 6, 7, 10, 12, 13, 15])

const arokoGallery = images.aroko.map((src, index) => ({
  src,
  alt: `Registro do ÀROKÒ 2026 ${index + 1}`,
  label: index === 0 ? 'Primeira edição / ÀROKÒ 2026' : undefined,
  ratio: portraitIndexes.has(index) ? 'portrait' as const : 'detail' as const,
  align: portraitIndexes.has(index) ? 'top' as const : 'center' as const,
}))

export default function ArokoCase() {
  return (
    <article className="case-page">
      <CaseHero number="02" title="ÀROKÒ" category="PRODUÇÃO CULTURAL / RELAÇÕES PÚBLICAS / COMUNICAÇÃO / DESIGN" meta={[{ label: 'FUNÇÕES', value: 'IDEALIZADORA / PRODUTORA / SOCIAL MEDIA / DESIGNER GRÁFICA' }, { label: 'LOCAL', value: 'ESPAÇO CULTURAL DA BARROQUINHA\nSALVADOR / BAHIA' }, { label: 'PERÍODO', value: '2025 — 2026' }]} image={images.aroko[13]} imageAlt="Registro da primeira edição do ÀROKÒ" imagePosition="center 30%" />
      <CaseIntro context="Mostra de Moda Afro-Soteropolitana concebida como Trabalho de Conclusão de Curso em Relações Públicas na UNEB, unindo pesquisa, moda autoral e experiência cultural." responsibilities={['Idealização e produção geral', 'Gestão orçamentária, cronograma e captação', 'Relacionamento com parceiros, fornecedores e imprensa', 'Identidade visual e estratégia de comunicação', 'Social media e campanha de financiamento coletivo']} />
      <CaseSection label="PRIMEIRA EDIÇÃO · 20/08/2026" title="Uma vitrine de descoberta" intro="A mostra ocupou o Espaço Cultural da Barroquinha com moda autoral, circulação de público e novos vínculos entre marcas e audiência.">
        <MetricGrid className="metric-grid-featured">
          <MetricItem value="~120" label="pessoas na realização da primeira edição" detail="19 looks · 3 marcas · Espaço Cultural da Barroquinha" size="primary" />
          <MetricItem value="30,5 mil" label="contas alcançadas no Instagram" detail="229,7 mil visualizações" size="primary" />
          <MetricItem value="96,3%" label="dos respondentes passaram a acompanhar ao menos uma marca" detail="70,4% não conheciam os estilistas antes" size="primary" />
        </MetricGrid>
      </CaseSection>
      <section className="case-business-bar" aria-label="Dados de produção do Àrokò">
        <div>
          <p className="label">PRODUÇÃO</p>
          <strong className="display">R$ 5,3 mil</strong>
        </div>
        <div>
          <p className="case-business-bar-value">R$ 19 mil estimados</p>
          <p className="case-business-bar-scope">7 parceiros · 4 apoios institucionais · 100 ingressos vendidos</p>
        </div>
      </section>
      <section className="case-insight" aria-label="Insight do projeto">
        <p className="label">INSIGHT</p>
        <p>A mostra funcionou como vitrine de descoberta: a maior parte do público não conhecia os criadores e quase todos passaram a acompanhá-los.</p>
      </section>
      <CaseEditorial id="aroko" title="ÀROKÒ" period="2025 — 2026" areas={['Produção cultural', 'Relações públicas', 'Comunicação', 'Design']} description="Mostra de Moda Afro-Soteropolitana concebida como Trabalho de Conclusão de Curso em Relações Públicas na UNEB, unindo pesquisa, moda autoral e experiência cultural." images={arokoGallery}>
        <figure className="case-editorial-embed">
          <iframe
            src="https://www.youtube.com/embed/_70OUG8zE8E"
            title="Vídeo da primeira edição do ÀROKÒ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <figcaption>Vídeo da primeira edição do ÀROKÒ</figcaption>
        </figure>
      </CaseEditorial>
      <ExternalLinks links={[
        { label: 'INSTAGRAM', href: 'https://www.instagram.com/projetoaroko/' },
        { label: 'GALERIA DE FOTOS / ÀROKÒ 2026', href: 'https://arokobahia.pixieset.com/aroko2026/' },
      ]} />
      <CaseNavigation previous={{ label: 'CASE ANTERIOR', title: 'AMARA NZERO', to: '/projetos/amara-nzero' }} next={{ label: 'PRÓXIMO CASE', title: 'CÂMARA MUNICIPAL DE SALVADOR', to: '/projetos/camara-municipal' }} />
    </article>
  )
}
