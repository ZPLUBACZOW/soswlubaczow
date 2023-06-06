import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
  return (
    <>
      <header className="header">
        <Image
          src="/header-image.svg"
          alt="mazaika"
          width="140"
          height="140"
          className="header__left"
        />

        <div className="header__center">
          <Image
            src="/Logo.svg"
            alt=""
            width="100"
            height="100"
            className="header__logo"
          />

          <h1>
            <span>zespół placówek im. Jana Pawła II</span>
            <br />
            MŁODZIEŻOWY ORŚRODEK <br /> WYCHOWAWCZY W LUBACZOWIE
          </h1>
        </div>

        <Image
          src="/header-image.svg"
          alt="mazaika"
          width="140"
          height="140"
          className="right"
        />
      </header>
      <div className="header__nav">
        <Link href="/">
          <h3>O nas</h3>
        </Link>
        <Link href="/">
          <h3>Aktualności</h3>
        </Link>
        <Link href="/">
          <h3>Ogłoszenia</h3>
        </Link>
        <Link href="/">
          <h3>Nasze pasje</h3>
        </Link>
        <Link href="/">
          <h3>Galeria</h3>
        </Link>
        <Link href="/">
          <h3>Dla rodziców</h3>
        </Link>
        <Link href="/">
          <h3>Dokumentacja</h3>
        </Link>
        <Link href="/">
          <h3>Kontakt</h3>
        </Link>
      </div>
    </>
  )
}
