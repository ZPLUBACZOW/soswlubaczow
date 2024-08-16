import './naszePasje.scss'
import Image from 'next/image'
import { getOurPassions } from '@/lib/queries'

export default async function NaszePasje() {
  const ourPassions = await getOurPassions()

  return (
    <main className="pasje">
      <h1 className="pasje__title">Nasze pasje i zainteresowania</h1>

      {ourPassions.map((ourPassion) => (
        <>
          <div className="pasje__description" key={ourPassion.title}>
            <h1 className="pasje__subtitle">{ourPassion.title}</h1>

            <Image
              src={ourPassion.icon.url}
              alt={ourPassion.title}
              width="40"
              height="50"
              className="pasje__icon"
            />
          </div>

          <hr className="pasje__border" />

          <div className="pasje__content">
            {ourPassion.images.map((image) => (
              <Image
                src={image.url}
                alt={ourPassion.title}
                width={300}
                height={250}
                className="pasje__image"
                key={image.id}
              />
            ))}
          </div>

          <hr className="pasje__border" />
        </>
      ))}
    </main>
  )
}
