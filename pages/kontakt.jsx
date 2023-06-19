import { Layout } from '@/components/layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout title="Strona Główna" styleName="kontakt">
      <div className="main-kontakt__title">
        <h1>KONTAKT</h1>
        <Image
          src="/kontakt-image.svg"
          alt="kontakt"
          width="225"
          height="200"
          className="main-kontakt__image"
        />
        <h3>
          ZESPÓŁ PLACÓWEK IM. JANA PAWŁA II W LUBACZOWIE <br /> Młodzieżowy Ośrodek
          Wychowawczy
        </h3>

        <h3>ul. Kościuszki 145, 37-600 Lubaczów</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2556.1069774743733!2d23.135233918823964!3d50.15913588570156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b5a2451fcbbd1%3A0xc5f3e2f82524e334!2zWmVzcMOzxYIgUGxhY8Ozd2VrIGltLiBKYW5hIFBhd8WCYSBJSQ!5e0!3m2!1spl!2spl!4v1687192312048!5m2!1spl!2spl"
          width="800"
          height="400"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="main-kontakt__map"
        />
      </div>

      <hr className="main-kontakt__border" />

      <div className="main-kontakt__description">
        <h3>
          <span>tel/fax: (16) 632 10 88</span> - mgr Małgorzata Jachyra - Mazepa Dyrektor{' '}
          <br />
          Zespołu Placówek im Jana Pawła II w Lubaczowie
        </h3>
        <h3>
          <span>tel/fax: (16) 632 82 95</span> - mgr Dariusz Cencora Wicedyrektor d/s{' '}
          <br />
          dydaktycznych Młodzieżowego Ośrodka Wychowawczego
        </h3>
        <h3>
          <span>tel/fax: (16) 632 15 31</span> - mgr Danuta Butyńska Wicedyrektor d/s{' '}
          <br />
          wychowawczych Młodzieżowego Ośrodka Wychowawczego
        </h3>
        <h3>
          <span>tel/fax: (16) 632 15 48</span> - Automat telefoniczny i pokój wychowawców{' '}
          <br /> w Internacie MOW
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

      <hr className="main-kontakt__border" />

      <div className="main-kontakt__description">
        <Image
          src="/poczta.svg"
          alt="kontakt"
          width="227"
          height="137"
          className="main-kontakt__image"
        />
        <h2>Sekretariat</h2>
        <h1>
          Sekretariat - <span>sekretariat@zplubaczow.com</span> <br />
          Sekretariat MOW - <span>sekretariatmow@zplubaczow.com</span> <br />
          Sekretariat Zespołu czynny od <span>Pn - Pt w godz. 7.00-15.00</span>
        </h1>
      </div>
    </Layout>
  )
}
