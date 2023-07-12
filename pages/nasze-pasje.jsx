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
          alt="image"
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
        <h1 className="main-pasje__subtitle">Papieroplastyka</h1>
        <Image
          src="/papieroplastyka.svg"
          alt="image"
          width="57"
          height="71"
          className="main-pasje__icon"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__content">
        <Image
          src="/nasze-pasje/papieroplastyka1.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/papieroplastyka2.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/papieroplastyka3.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__description">
        <h1 className="main-pasje__subtitle">Technika</h1>
        <Image
          src="/technika.svg"
          alt="image"
          width="60"
          height="80"
          className="main-pasje__icon"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__content">
        <Image
          src="/nasze-pasje/technika1.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/technika2.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/technika3.png"
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
          alt="image"
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
      <div className="main-pasje__description">
        <h1 className="main-pasje__subtitle">Turystyka i rekreacja</h1>
        <Image
          src="/turystyka.svg"
          alt="image"
          width="40"
          height="49"
          className="main-pasje__icon"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__content">
        <Image
          src="/nasze-pasje/turystyka1.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/turystyka2.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/turystyka3.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__description">
        <h1 className="main-pasje__subtitle">Sport</h1>
        <Image
          src="/sport.svg"
          alt="image"
          width="68"
          height="60"
          className="main-pasje__icon"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__content">
        <Image
          src="/nasze-pasje/sport1.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/sport2.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/sport3.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__description">
        <h1 className="main-pasje__subtitle">Fotografia</h1>
        <Image
          src="/fotografia.svg"
          alt="image"
          width="58"
          height="37"
          className="main-pasje__icon"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__content">
        <Image
          src="/nasze-pasje/fotografia1.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/fotografia2.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/fotografia3.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__description">
        <h1 className="main-pasje__subtitle">Kulinaria</h1>
        <Image
          src="/kulinaria.svg"
          alt="image"
          width="52"
          height="63"
          className="main-pasje__icon"
        />
      </div>

      <hr className="main-pasje__border" />

      <div className="main-pasje__content">
        <Image
          src="/nasze-pasje/kulinaria1.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/kulinaria2.png"
          alt="image"
          width="300"
          height="250"
          className="main-pasje__image"
        />
        <Image
          src="/nasze-pasje/kulinaria3.png"
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
