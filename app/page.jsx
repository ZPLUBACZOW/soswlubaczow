import './main.scss'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title:
    'Strona Główna | Specjalistyczny Ośrodek Szkolno-Wychowawczy w Lubaczowie',
}

export default function Home() {
  return (
    <main className="main-page">
      <h1 className="main-page__title">
        o specjalnym ośrodku <br />
        szkolno-wychowawczym w<span> lubaczowie</span>
      </h1>

      <div className="main-page__content">
        <p>
          W naszym ośrodku zapewniamy edukację, wychowanie i terapię dzieciom i
          młodzieży z niepełnosprawnością intelektualną w stopniu umiarkowanym,
          znacznym, głębokim, z autyzmem, Zespołem Aspergera i innymi
          zaburzeniami rozwoju w przedziale wiekowym od 3 do 25 roku życia.
        </p>

        <Image
          src="/mainPage/mainFirst.jpg"
          alt="zebranie"
          width="541"
          height="263"
          className="main-page__image"
        />
      </div>

      <div className="main-page__content">
        <Image
          src="/mainPage/mainSecond.jpg"
          alt="zoo"
          width="430"
          height="290"
          className="main-page__image"
        />

        <p>
          Zdając sobie sprawę z ograniczeń i słabości naszych podopiecznych, a
          jednocześnie wierząc w możliwości poprawy jakości ich życia, za główny
          cel przyjeliśmy wspieranie wszechstronnego rozwoju na miarę ich
          możliwości, spełnienie oczekiwań, zaspokajanie potrzeb oraz
          wyposażenie uczniów w podstawowe umiejetności życiowe i społeczne.
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
    </main>
  )
}
