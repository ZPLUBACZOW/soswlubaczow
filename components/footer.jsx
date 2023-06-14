import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer--container">
        <div className="footer__description">
          <h1 className="footer__title">MŁODZIEŻOWY ORŚRODEK WYCHOWAWCZY W LUBACZOWIE</h1>

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

        <Image src="/footer-image.png" alt="Jan Paweł II" width="320" height="200" />
      </div>
    </footer>
  )
}
