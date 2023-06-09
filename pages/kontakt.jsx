import { Layout } from '@/components/layout'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title="Strona Główna" styleName="kontakt">
      <main className={`container ${inter.className}`}>
        <div className="main-kontakt__title">
          <h1>KONTAKT</h1>
          <Image
            src="/logo kontakt.svg"
            alt="image"
            width="225"
            height="196"
          ></Image>
          <h3>
            ZESPÓŁ PLACÓWEK IM. JANA PAWŁA II W LUBACZOWIE Młodzieżowy Ośrodek
            Wychowawczy
          </h3>

          <h3>ul. Kościuszki 145, 37-600 Lubaczów</h3>
        </div>

        <div className="main-kontakt__description">
          <h3>
            tel/fax: (16) 632 10 88 - mgr Małgorzata Jachyra - Mazepa Dyrektor
            Zespołu Placówek im Jana Pawła II w Lubaczowie
          </h3>
          <h3>
            tel/fax: (16) 632 82 95 - mgr Dariusz Cencora Wicedyrektor d/s
            dydaktycznych Młodzieżowego Ośrodka Wychowawczego
          </h3>
          <h3>
            tel/fax: (16) 632 15 31 - mgr Danuta Butyńska Wicedyrektor d/s
            wychowawczych Młodzieżowego Ośrodka Wychowawczego
          </h3>
          <h3>
            tel/fax: (16) 632 15 48 - Automat telefoniczny i pokój wychowawców w
            Internacie MOW
          </h3>
          <h3>
            Kontakt do Młodzieżowego Ośrodka Wychowawczego: <br /> w godzinach
            <span> 8:00-15:00 - 16 632 10 88</span> <br />w godzinach
            <span> 15:00-8:00 - 699 671 869</span>
          </h3>
          <h4>
            Telefony kontaktowe do grup: <br />
            gr. I - 699 671 870 <br />
            gr. II - 699 671 871 <br />
            gr. III - 699 671 872 <br />
            gr. adaptacyjna - 699 671 873
          </h4>
        </div>
        <div className="main-kontakt__description">
          <Image src="/poczta.svg" alt="image" width="227" height="137"></Image>
          <h2>sekretariat</h2>
          <h1>
            sekretariat - sekretariat@zplubaczow.com <br />
            sekretariat MOW - sekretariatmow@zplubaczow.com
            <br />
            Sekretariat Zespołu czynny od Pn - Pt w godz. 7.00-15.00
          </h1>
        </div>
      </main>
    </Layout>
  )
}
