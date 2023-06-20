import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDroped, setIsDroped] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset || document.documentElement.scrollTop

      setScrollPosition(currentPosition)

      if (currentPosition >= 140) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className="header">
        <div className="header__container">
          <Image
            src="/header-image.svg"
            alt="mozaika"
            width="140"
            height="140"
            className="header__left"
          />

          <div className="header__center">
            <Link href="/">
              <Image
                src="/Logo.svg"
                alt=""
                width="100"
                height="100"
                className="header__logo"
              />
            </Link>

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
            className="header__right"
          />
        </div>

        <div className={isScrolled ? 'holder' : ''}></div>

        <nav className={`header__nav ${isScrolled ? 'fixed' : ''}`}>
          <div className="header__nav--figure"></div>

          <div className="header__menu">
            <div
              onClick={() => setIsDroped(!isDroped)}
              className="header__menu--element"
            />
            <div
              onClick={() => setIsDroped(!isDroped)}
              className="header__menu--element"
            />
            <div
              onClick={() => setIsDroped(!isDroped)}
              className="header__menu--element"
            />

            <ol className={`header__menu--droped ${isDroped ? 'droped' : ''}`}>
              <Link href="/">
                <li>O nas</li>
              </Link>
              <Link href="/aktualnosci">
                <li>Aktualności</li>
              </Link>
              <Link href="/ogloszenia">
                <li>Ogłoszenia</li>
              </Link>
              <Link href="/">
                <li>Nasze pasje</li>
              </Link>
              <Link href="/">
                <li>Oferta edukacjna</li>
              </Link>
              <Link href="/">
                <li>Dla rodziców</li>
              </Link>
              <Link href="/dokumenty">
                <li>Dokumentacja</li>
              </Link>
              <Link href="/kontakt">
                <li>Kontakt</li>
              </Link>
            </ol>
          </div>

          <ul>
            <Link href="/">
              <li>O nas</li>
            </Link>
            <Link href="/aktualnosci">
              <li>Aktualności</li>
            </Link>
            <Link href="/ogloszenia">
              <li>Ogłoszenia</li>
            </Link>
            <Link href="/">
              <li>Nasze pasje</li>
            </Link>
            <Link href="/">
              <li>Oferta edukacjna</li>
            </Link>
            <Link href="/">
              <li>Dla rodziców</li>
            </Link>
            <Link href="/dokumenty">
              <li>Dokumentacja</li>
            </Link>
            <Link href="/kontakt">
              <li>Kontakt</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  )
}
