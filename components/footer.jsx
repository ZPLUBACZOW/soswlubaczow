import './style/footer.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer--container">
        <div className="footer__description">
          <h1 className="footer__title">
            SPECJALNY OŚRODEK <br /> SZKOLNO-WYCHOWAWCZY W LUBACZOWIE
          </h1>

          <div className="footer__text">
            <p>tel/fax.: (16) 632 10 88</p>
            <p>E-mail: sekretariat@zplubaczow.com</p>
            <p>
              <Link href="https://goo.gl/maps/6hV9FaHmb46H7WXx9" target="_balnk">
                Adres: Tadeusza Kościuszki 145
              </Link>
            </p>
            <p>Kod pocztowy: 37-600 Lubaczów</p>
            <p>
              <Link href="/" target="_balnk">
                Polityka prywatności
              </Link>
            </p>
          </div>

          <h4 className="footer__autors">
            <Link href="https://do-moon.vercel.app">
              &copy;2023 DoMoon project | All rights reserved
            </Link>
          </h4>
        </div>

        <Image
          src="/footer-image.png"
          alt="Jan Paweł II"
          width="320"
          height="200"
          className="footer__image"
        />
      </div>

      <div className="footer__certificates-section">
        <p className="footer__certificates-section--title">
          Spełniamy standardy dostępności oraz W3C
        </p>

        <div className="footer__certificates">
          <div className="footer__certificat">
            <Image src="/checkmark.svg" alt="checkmark" width="16" height="16" />
            <p>WCAG 2.1</p>
          </div>

          <div className="footer__certificat">
            <Image src="/checkmark.svg" alt="checkmark" width="16" height="16" />
            <p>SECTION 508</p>
          </div>

          <div className="footer__certificat">
            <Image src="/checkmark.svg" alt="checkmark" width="16" height="16" />
            <p>EAA/EN 301549</p>
          </div>

          <div className="footer__certificat">
            <Image src="/checkmark.svg" alt="checkmark" width="16" height="16" />
            <p>IS 5568</p>
          </div>
        </div>

        <div className="footer__w3c">
          <Image src="/w3c-certificates.svg" alt="certificates" width="50" height="100" />
          <Image src="/w3c-html.svg" alt="html" width="50" height="100" />
          <Image src="/w3c-css.svg" alt="css" width="50" height="100" />
        </div>
      </div>
    </footer>
  )
}
