import { Layout } from '@/components/layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout title="Strona Główna" styleName="page">
      <div className="main-page__title">
        <h1>
          O MŁODZIEŻOWYM OŚRODKU WYCHOWAWCZYM W <span>LUBACZOWIE</span>
        </h1>
      </div>

      <div className="main-page__description">
        <h2>
          Młodzieżowy Ośrodek Wychowawczy przeznaczony jest dla młodzieży
          charakteryzującej się poważniejszymi zaburzeniami w funkcjonowaniu społecznym.
          Do ośrodka przyjmowana jest młodzież, wobec której sądy rodzinne wydały w trybie
          ustawy o postępowaniu w sprawach nieletnich postanowienia o konieczności
          zastosowania środka wychowawczego polegającego na umieszczeniu w placówce
          resocjalizacyjnej.
        </h2>
        <Image src="/mow.png" alt="image" width="541" height="263"></Image>
      </div>
      <div className="main-page__description">
        <Image src="/pokój.jpg" alt="image" width="430" height="290"></Image>
        <h2>
          Aktualnie nasz ośrodek świadczy opiekę całodobową, całoroczną, przeznaczoną dla
          chłopców w wieku 13 – 18 lat. MOW w Lubaczowie jest piętrowym budynkiem
          przystosowanym do prowadzenia zajęć dydaktycznych i wychowawczych. Budynek ten
          od kilku ostatnich lat jest systematycznie modernizowany i dostosowywany do
          obecnie obowiązujących standardów i norm.
        </h2>
      </div>
      <div className="main-page__description">
        <h2>
          Na parterze znajduje się szkoła, w skład której wchodzi: 6 klasopracowni
          przedmiotowych, wyposażonych w nowoczesne pomoce dydaktyczne typu: tablice
          interaktywne i multimedialne, sprzęt RTV, komputery, sala gimnastyczna,
          siłownia, sala audiowizualna, biblioteka z czytelnią, kuchnia szkoły branżowej,
          pracownia murarsko - tynkarska, pracownia ceramiki, gabinet pedagoga, gabinet
          psychologa, gabinet lekarski, gabinet wicedyrektora ds. dydaktycznych, pokój
          nauczycielski. W szkole używana jest ponadto nowoczesna sala multimedialna.
        </h2>
        <Image src="/komputery.jpg" alt="image" width="430" height="290"></Image>
      </div>
      <div className="main-page__description">
        <Image src="/pokój.jpg" alt="image" width="430" height="290"></Image>
        <h2>
          Internat usytuowany jest na I piętrze tegoż budynku. Znajdują się tu:
          pomieszczenia 4 grup wychowawczych, w skład których wchodzą: świetlica, 3
          sypialnie, łazienka, i kuchnia, izolatka, gabinet wicedyrektora ds.
          wychowawczych, studio nagrań, sala relaksacyjna, specjalistyczny gabinet
          psychologów i pedagogów, pokój pracy wychowawczej.
        </h2>
      </div>
      <div className="main-page__description">
        <h2>
          Szkoły wchodzące w skład MOW: szkoła podstawowa dla uczniów w normie
          intelektualnej i niedostosowanych społecznie oraz z niepełnosprawnością
          intelektualną w stopniu lekkim i niedostosowanych społecznie – klasy: VII-VIII,
          szkoła branżowa I stopnia dla uczniów w normie intelektualnej i niedostosowanych
          społecznie oraz z niepełnosprawnością intelektualną w stopniu lekkim i
          niedostosowanych społecznie – klasa I (specjalność murarz – tynkarz oraz
          specjalność kucharz) oraz klasa II (specjalność murarz – tynkarz oraz
          specjalność kucharz).
        </h2>
        <Image src="/zajęcia.jpg" alt="image" width="430" height="290"></Image>
      </div>
      <div className="main-page__description">
        <Image src="/boisko.png" alt="image" width="430" height="290"></Image>
        <h2>
          Ośrodek dysponuje także własną kuchnią ze stołówką oraz pralnią. Wychowankowie
          mają do dyspozycji boisko do piłki nożnej, ręcznej, koszykowej oraz plac
          rekreacyjny. Budynki otoczone są zielenią, klombami, rosną tam krzewy i drzewa
          ozdobne.
        </h2>
      </div>
    </Layout>
  )
}
