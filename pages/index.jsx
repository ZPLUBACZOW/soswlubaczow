import { Layout } from '@/template/layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title="Strona Główna" styleName="page">
      <h1 className="main-page__title">
        o specjalnym ośrodku <br />
        szkolno-wychowawczym w<span> lubaczowie</span>
      </h1>

      <div className="main-page__content">
        <p>
          Specjalny ośrodek szkolno-wychowawczy w lubaczowie pomaga dzieciom z
          niepełnosprawnościami w prawidłowym rozwoju zapewniając profesjonalną opiekę
          specjalistów do pracy z potrzebującymi owej opieki dziećmi
        </p>

        <Image
          src="/główne1.png"
          alt="zebranie"
          width="541"
          height="263"
          className="main-page__image"
        />
      </div>

      <div className="main-page__content">
        <Image
          src="/główne2.png"
          alt="zoo"
          width="430"
          height="290"
          className="main-page__image"
        />

        <p>
          Nasz ośrodek oferuje: Wczesne wspomaganie dziecka Opiekę przedszkolną Edukacje w
          szkole podstawowej Edukacje w szkole przysposabiającej do pracy Zespoły
          rewalidacyjno-wychowawcze Świetlicę oraz internat
        </p>
      </div>
      <div className="main-page__declarations">
        <Link href="https://media.graphassets.com/uD402W5XRXuriyulRB7R">
          <p>Dekralacja dostępności</p>
        </Link>
        <Link href="https://media.graphassets.com/yWEIVvKxRaWF2dkIR51N">
          <p>Klauzula informacyjna</p>
        </Link>
      </div>
    </Layout>
  )
}
