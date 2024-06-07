'use client'

import './naszePasje.scss'
import { useQuery } from '@apollo/client'
import client from '@/lib/apolloClient'
import { GET_OURPASSIONS } from '@/lib/queries'
import Image from 'next/image'

export default function NaszePasje() {
  const { loading, error, data } = useQuery(GET_OURPASSIONS, { client })

  const ourPassions = data?.OurPassions || []

  if (loading) return <h1>Ładowanie danych...</h1>
  if (error) return <h1>Błąd pobierania danych: {error.message}</h1>

  return (
    <main className="pasje">
      <h1 className="pasje__title">Nasze pasje i zainteresowania</h1>

      {ourPassions.map((ourPassion) => (
        <>
          <div className="pasje__description" key={ourPassion.title}>
            <h1 className="pasje__subtitle">{ourPassion.title}</h1>

            <Image
              src={ourPassion.icon.url}
              alt={ourPassion.icon.description}
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
                alt={image.description}
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
