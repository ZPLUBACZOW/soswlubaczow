import Image from 'next/image'

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
    </>
  )
}
