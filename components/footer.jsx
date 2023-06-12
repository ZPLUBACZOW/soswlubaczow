import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer--container">
        <div className="footer__description">
          <h1 className="footer__title">MŁODZIEŻOWY ORŚRODEK WYCHOWAWCZY W LUBACZOWIE</h1>
        </div>

        <Image src="/footer-image.png" alt="Jan Paweł II" width="320" height="200" />
      </div>
    </footer>
  )
}
