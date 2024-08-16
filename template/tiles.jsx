import './style/tiles.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Tiles({ props, title, titleSpan, icon, param }) {
  return (
    <main className="tiles">
      <section className="tiles__header">
        <div className="tiles__header--span">
          <h3>{title}</h3>
          <h1>{titleSpan}</h1>
        </div>

        <div className="tiles__header--icon">{icon}</div>
      </section>

      <section className="tiles__container">
        {props.map((prop) => (
          <Link href={`${param}/${prop.slug}`} key={prop.id}>
            <div className="tiles__post">
              <p className="tiles__date">{prop.date}</p>

              <Image
                src={prop.mainImage?.url}
                alt={prop.title}
                width="400"
                height="350"
                className="tiles__post--image"
              />

              <h2>{prop.title}</h2>

              <Image
                src="/arrow.svg"
                alt="arrow"
                width="20"
                height="20"
                className="tiles__arrow"
              />
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
