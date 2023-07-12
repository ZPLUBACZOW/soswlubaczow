import { Layout } from '@/template/layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout title="Strona Główna" styleName="page">
      <h1 className="main-page__title">
        o specjalistycznym ośrodku <br />
        szkolno-wychowawczym w<span> lubaczowie</span>
      </h1>

      <div className="main-page__content">
        <p>
          Specjalny ośrodek szkolno-wychowawczy w lubaczowie pomaga dzieciom z
          niepełnosprawnościami w prawidłowym rozwoju zapewniając profesjonalną
          opiekę specjalistów do pracy z potrzebującymi owej opieki dziećmi
        </p>

        <Image
          src="/główne1.png"
          alt="image"
          width="541"
          height="263"
          className="main-page__image"
        />
      </div>

      <div className="main-page__content">
        <Image
          src="/główne2.png"
          alt="image"
          width="430"
          height="290"
          className="main-page__image"
        />

        <p>
          Nasz ośrodek oferuje: Wczesne wspomaganie dziecka Opiekę przedszkolną
          Edukacje w szkole podstawowej Edukacje w szkole przysposabiającej do
          pracy Zespoły rewalidacyjno-wychowawcze Świetlicę oraz internat
        </p>
      </div>
    </Layout>
  )
}
