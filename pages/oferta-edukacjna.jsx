import { Layout } from '@/template/layout'
import Image from 'next/image'
import CustomImage from '@/components/custom-image'

export default function OfretaEdukacjna() {
  return (
    <Layout title="Oferta Edukacjna" styleName="oferta-edukacjna">
      <h1 className="main-oferta-edukacjna__title">Oferta Edukacjna</h1>
      <section className="main-oferta-edukacjna__prymary">
        <h2 className="main-oferta-edukacjna__prymary--title">
          Szkoła podstawowa klasy 4-8:
        </h2>

        <div className="main-oferta-edukacjna__galery">
          <CustomImage src="/placeholder.svg" alt="" width="420" height="420" />

          <div className="main-oferta-edukacjna__galery--mini">
            <CustomImage src="/placeholder.svg" alt="" width="200" height="200" />
            <CustomImage src="/placeholder.svg" alt="" width="200" height="200" />
          </div>
        </div>
      </section>

      <section className="main-oferta-edukacjna__secondary">
        <h2 className="main-oferta-edukacjna__secondary--title">
          Szkoła branżowa I stopnia na kierunkach:
        </h2>

        <article className="main-oferta-edukacjna__article">
          <span>
            <h3>Murarz – tynkarz | symbol 711204 - B.18</h3>
            <p>
              trzyletni cykl kształcenia, zakończony jest egzaminem państwowym,
              prowadzonym pod nadzorem Okręgowej Komisji Egzaminacyjnej, który uprawnia do
              legalnej pracy w każdym kraju U.E. na stanowisku robotnika
              wykwalifikowanego.
            </p>
          </span>

          <Image src="/placeholder.svg" alt="" width="200" height="200" />
        </article>

        <article className="main-oferta-edukacjna__article">
          <span>
            <h3>Kucharz | symbol 512001</h3>
            <p>
              trzyletni cykl kształcenia, zakończony egzaminem zawodowym zdawanym przed
              Okręgową Komisją Egzaminacyjną. Zdany egzamin zawodowy daje kwalifikacje do
              pracy na stanowisku kucharza w placówkach gastronomicznych na terenie Polski
              i krajów U.E.
            </p>
          </span>

          <Image src="/placeholder.svg" alt="" width="200" height="200" />
        </article>
      </section>
    </Layout>
  )
}
