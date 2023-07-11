import { Layout } from '@/template/layout'
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
          ZESPÓŁ PLACÓWEK IM. JANA PAWŁA II W LUBACZOWIE <br /> Specjalistyczny
          Ośrodek Szkolno-Wychowawczy
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
          <span>tel/fax: (16) 632 10 88</span> - mgr Małgorzata Jachyra-Mazepa
          Dyrektor <br /> Zespołu Placówek im Jana Pawła II w Lubaczowie
        </h3>
        <h3>
          <span>tel/fax: (16) 632 82 99</span> - mgr Renata Sieradzka-Koperczak
          Wicedyrektor d/s <br />
          dydaktycznych Specjalnego Ośrodka Szkolno-Wychowawczego w Lubaczowie
        </h3>
        <h3>
          <span>tel/fax: (16) 632 82 82</span> - mgr Agata Gardzielik-Misztal
          Wicedyrektor d/s
          <br />
          wychowawczych Specjalnego Ośrodka Szkolno-Wychowawczego w Lubaczowie
        </h3>
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
        <h1>
          Sekretariat - <span>sekretariat@zplubaczow.com</span> <br />
          Pedagog - <span>j.misztal@zplubaczow.com</span> <br />
          Psycholog:
          <br />
          <span>
            a.zielinska@zplubaczow.com <br />
            e.wisniewska-jaracz@zplubaczow.com
          </span>
          <br />
          Nr konta: <br />
          <span>30910100032001000620110001</span>
        </h1>
      </div>
    </Layout>
  )
}
