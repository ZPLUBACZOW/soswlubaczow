import { Layout } from '@/template/layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout title="Strona Główna" styleName="page">
      <h1 className="main-page__title">
        o młodzieżowym ośrodku wychowawczym w <span>lubaczowie</span>
      </h1>

      <div className="main-page__content">
        <p>
          Młodzieżowy Ośrodek Wychowawczy przeznaczony jest dla młodzieży
          charakteryzującej się poważniejszymi zaburzeniami w funkcjonowaniu społecznym.
          Do ośrodka przyjmowana jest młodzież, wobec której sądy rodzinne wydały w trybie
          ustawy o postępowaniu w sprawach nieletnich postanowienia o konieczności
          zastosowania środka wychowawczego polegającego na umieszczeniu w placówce
          resocjalizacyjnej.
        </p>

        <Image
          src="/mow.png"
          alt="image"
          width="541"
          height="263"
          className="main-page__image"
        />
      </div>

      <div className="main-page__content">
        <Image
          src="/pokój.jpg"
          alt="image"
          width="430"
          height="290"
          className="main-page__image"
        />

        <p>
          Aktualnie nasz ośrodek świadczy opiekę całodobową, całoroczną, przeznaczoną dla
          chłopców w wieku 13 – 18 lat. MOW w Lubaczowie jest piętrowym budynkiem
          przystosowanym do prowadzenia zajęć dydaktycznych i wychowawczych. Budynek ten
          od kilku ostatnich lat jest systematycznie modernizowany i dostosowywany do
          obecnie obowiązujących standardów i norm.
        </p>
      </div>

      <div className="main-page__content">
        <p>
          Na parterze znajduje się szkoła, w skład której wchodzi: 6 klasopracowni
          przedmiotowych, wyposażonych w nowoczesne pomoce dydaktyczne typu: tablice
          interaktywne i multimedialne, sprzęt RTV, komputery, sala gimnastyczna,
          siłownia, sala audiowizualna, biblioteka z czytelnią, kuchnia szkoły branżowej,
          pracownia murarsko - tynkarska, pracownia ceramiki, gabinet pedagoga, gabinet
          psychologa, gabinet lekarski, gabinet wicedyrektora ds. dydaktycznych, pokój
          nauczycielski. W szkole używana jest ponadto nowoczesna sala multimedialna.
        </p>

        <Image
          src="/komputery.jpg"
          alt="image"
          width="430"
          height="290"
          className="main-page__image"
        />
      </div>

      <div className="main-page__content">
        <Image
          src="/pokój.jpg"
          alt="image"
          width="430"
          height="290"
          className="main-page__image"
        />

        <p>
          Internat usytuowany jest na I piętrze tegoż budynku. Znajdują się tu:
          pomieszczenia 4 grup wychowawczych, w skład których wchodzą: świetlica, 3
          sypialnie, łazienka, i kuchnia, izolatka, gabinet wicedyrektora ds.
          wychowawczych, studio nagrań, sala relaksacyjna, specjalistyczny gabinet
          psychologów i pedagogów, pokój pracy wychowawczej.
        </p>
      </div>

      <div className="main-page__content">
        <p>
          Szkoły wchodzące w skład MOW: szkoła podstawowa dla uczniów w normie
          intelektualnej i niedostosowanych społecznie oraz z niepełnosprawnością
          intelektualną w stopniu lekkim i niedostosowanych społecznie – klasy: VII-VIII,
          szkoła branżowa I stopnia dla uczniów w normie intelektualnej i niedostosowanych
          społecznie oraz z niepełnosprawnością intelektualną w stopniu lekkim i
          niedostosowanych społecznie – klasa I (specjalność murarz – tynkarz oraz
          specjalność kucharz) oraz klasa II (specjalność murarz – tynkarz oraz
          specjalność kucharz).
        </p>

        <Image
          src="/zajęcia.jpg"
          alt="image"
          width="430"
          height="290"
          className="main-page__image"
        />
      </div>

      <div className="main-page__content">
        <Image
          src="/boisko.png"
          alt="image"
          width="430"
          height="290"
          className="main-page__image"
        />

        <p>
          Ośrodek dysponuje także własną kuchnią ze stołówką oraz pralnią. Wychowankowie
          mają do dyspozycji boisko do piłki nożnej, ręcznej, koszykowej oraz plac
          rekreacyjny. Budynki otoczone są zielenią, klombami, rosną tam krzewy i drzewa
          ozdobne.
        </p>
      </div>
    </Layout>
  )
}
