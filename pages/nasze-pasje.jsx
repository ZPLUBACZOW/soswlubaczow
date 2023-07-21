import { Layout } from '@/template/layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout title="Nasze pasje" styleName="pasje">
      <h1 className="main-pasje__title">Nasze pasje i zainteresowania</h1>
      <div className="main-pasje__description">
        <h1 className="main-pasje__subtitle">Ceramika</h1>
        <Image
          src="/ceramika.svg"
          alt="ceramika ikonka"
          width="40"
          height="49"
          className="main-pasje__icon"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__content">
        <Image
          src="/nasze-pasje/ceramika1.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/ceramika2.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/ceramika3.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__description">
        <h1 className="main-pasje__subtitle">Taniec</h1>
        <Image
          src="/taniec.svg"
          alt="taniec ikonka"
          width="57"
          height="71"
          className="main-pasje__icon"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__content">
        <Image
          src="/nasze-pasje/taniec1.jpg"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/taniec2.jpg"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/taniec3.jpg"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__description">
        <h1 className="main-pasje__subtitle">Przyroda</h1>
        <Image
          src="/przyroda.svg"
          alt="przyroda ikonka"
          width="60"
          height="80"
          className="main-pasje__icon"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__content">
        <Image
          src="/nasze-pasje/przyroda1.jpg"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/przyroda2.jpg"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/przyroda3.jpg"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__description">
        <h1 className="main-pasje__subtitle">Teatr</h1>
        <Image
          src="/teatr.svg"
          alt="teatr ikonka"
          width="55"
          height="51"
          className="main-pasje__icon"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__content">
        <Image
          src="/nasze-pasje/teatr1.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/teatr2.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/teatr3.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
      </div>

      <hr className="main-pasje__border" />
    </Layout>
  )
}
