import { Layout } from '@/template/layout'
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
          <CustomImage
            src="/oferta-edukacjna/osrodek.jpg"
            alt="ośrodek"
            width="420"
            height="420"
          />

          <div className="main-oferta-edukacjna__galery--mini">
            <CustomImage
              src="/oferta-edukacjna/hamak.jpg"
              alt="hamak"
              width="400"
              height="400"
            />
            <CustomImage
              src="/oferta-edukacjna/skakanie.jpg"
              alt="dzieci"
              width="400"
              height="400"
            />
          </div>
        </div>
      </section>

      <section className="main-oferta-edukacjna__secondary">
        <h2 className="main-oferta-edukacjna__secondary--title">Struktura:</h2>

        <ol className="main-oferta-edukacjna__secondary--list">
          <li>Wczesne Wspomaganie</li>
          <li>Oddziały Przedszkolne</li>
          <li>Szkoła Podstawowa Nr. 3</li>
          <li>Szkoła Przysposabiająca Do Pracy</li>
          <li>Zespoły Rewalidacyjno-wychowawcze</li>
          <li>Internat</li>
          <li>Świetlica</li>
        </ol>
      </section>
    </Layout>
  )
}
