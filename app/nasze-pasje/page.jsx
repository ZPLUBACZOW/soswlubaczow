import './naszePasje.scss'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="pasje">
      <h1 className="pasje__title">Nasze pasje i zainteresowania</h1>
      <div className="pasje__description">
        <h1 className="pasje__subtitle">Ceramika</h1>
        <Image
          src="/naszePasje/ceramika.svg"
          alt="ceramika ikonka"
          width="40"
          height="49"
          className="pasje__icon"
        />
      </div>

      <hr className="pasje__border" />

      <div className="pasje__content">
        <Image
          src="/naszePasje/ceramika1.JPG"
          alt="image"
          width="300"
          height="250"
          className="pasje__image"
        />
        <Image
          src="/naszePasje/ceramika2.jpg"
          alt="image"
          width="300"
          height="250"
          className="pasje__image"
        />
        <Image
          src="/naszePasje/ceramika3.JPG"
          alt="image"
          width="300"
          height="250"
          className="pasje__image"
        />
      </div>

      <hr className="pasje__border" />

      <div className="pasje__description">
        <h1 className="pasje__subtitle">Taniec</h1>
        <Image
          src="/naszePasje/taniec.svg"
          alt="taniec ikonka"
          width="57"
          height="71"
          className="pasje__icon"
        />
      </div>

      <hr className="pasje__border" />

      <div className="pasje__content">
        <Image
          src="/naszePasje/taniec1.jpg"
          alt="image"
          width="300"
          height="250"
          className="pasje__image"
        />
        <Image
          src="/naszePasje/taniec2.jpg"
          alt="image"
          width="300"
          height="250"
          className="pasje__image"
        />
        <Image
          src="/naszePasje/taniec3.jpg"
          alt="image"
          width="300"
          height="250"
          className="pasje__image"
        />
      </div>

      <hr className="pasje__border" />

      <div className="pasje__description">
        <h1 className="pasje__subtitle">Przyroda</h1>
        <Image
          src="/naszePasje/przyroda.svg"
          alt="przyroda ikonka"
          width="60"
          height="80"
          className="pasje__icon"
        />
      </div>

      <hr className="pasje__border" />

      <div className="pasje__content">
        <Image
          src="/naszePasje/przyroda1.jpg"
          alt="image"
          width="300"
          height="250"
          className="pasje__image"
        />
        <Image
          src="/naszePasje/przyroda2.jpg"
          alt="image"
          width="300"
          height="250"
          className="pasje__image"
        />
        <Image
          src="/naszePasje/przyroda3.jpg"
          alt="image"
          width="300"
          height="250"
          className="pasje__image"
        />
      </div>

      <hr className="pasje__border" />

      <div className="pasje__description">
        <h1 className="pasje__subtitle">Teatr</h1>
        <Image
          src="/naszePasje/teatr.svg"
          alt="teatr ikonka"
          width="55"
          height="51"
          className="pasje__icon"
        />
      </div>

      <hr className="pasje__border" />

      <div className="pasje__content">
        <Image
          src="/naszePasje/teatr1.png"
          alt="image"
          width="300"
          height="250"
          className="pasje__image"
        />
        <Image
          src="/naszePasje/teatr2.png"
          alt="image"
          width="300"
          height="250"
          className="pasje__image"
        />
        <Image
          src="/naszePasje/teatr3.png"
          alt="image"
          width="300"
          height="250"
          className="pasje__image"
        />
      </div>

      <hr className="pasje__border" />
    </main>
  )
}
