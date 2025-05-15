import './ofertaEdukacjna.scss'
import ScaledImage from '@/components/scaledImage'

export default function OfretaEdukacjna() {
  return (
    <main className="oferta-edukacjna">
      <h1 className="oferta-edukacjna__title">Oferta Edukacjna</h1>
      <section className="oferta-edukacjna__prymary">
        <h2 className="oferta-edukacjna__prymary--title">
          Szkoła podstawowa klasy 4-8:
        </h2>

        <div className="oferta-edukacjna__galery">
          <ScaledImage
            src="/ofertaEdukacjna/globus.jpg"
            alt="dzieci z globusem"
            width="420"
            height="420"
          />

          <div className="oferta-edukacjna__galery--mini">
            <ScaledImage
              src="/ofertaEdukacjna/teleskop.jpg"
              alt="dzieci z teleskopem"
              width="400"
              height="400"
            />
            <ScaledImage
              src="/ofertaEdukacjna/skakanie.jpg"
              alt="dzieci"
              width="400"
              height="400"
            />
          </div>
        </div>
      </section>

      <section className="oferta-edukacjna__secondary">
        <h2 className="oferta-edukacjna__secondary--title">
          W ośrodku funkcjonują:
        </h2>

        <ol className="oferta-edukacjna__secondary--list">
          <li>Wczesne wspomaganie rozwoju dziecka</li>
          <li>Oddziały przedszkolne</li>
          <li>Szkoła Podstawowa nr 3</li>
          <li>Szkoła Specjalna Przysposabiająca Do Pracy</li>
          <li>Szkoła Branżowa I stopnia - kucharz</li>
          <li>Zespoły Rewalidacyjno-wychowawcze</li>
          <li>Internat</li>
          <li>Świetlica</li>
        </ol>
      </section>
    </main>
  )
}
