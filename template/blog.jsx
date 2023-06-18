import { Layout } from '@/components/layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog({ tiles, Pagetitle, title, props, galery }) {
  return (
    <Layout title={Pagetitle} styleName="blog">
      <h1 className="main-blog__title">{title}</h1>

      {tiles && (
        <section className="main-blog__container">
          {props.map((prop, i) => (
            <Link href={prop.slug} key={i}>
              <div key={i} className="main-blog__tiles">
                {galery ? (
                  <div className="main-blog__galery">
                    <p className="main-blog__date">{prop.releaseDate}</p>
                    <p className="main-blog__galery--category">film</p>
                  </div>
                ) : (
                  <p className="main-blog__date">{prop.releaseDate}</p>
                )}
                <Image
                  src={prop.image.url}
                  alt={prop.title}
                  width="400"
                  height="350"
                  className="main-blog__tiles--image"
                />
                <h2>{prop.title}</h2>
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width="20"
                  height="20"
                  className="main-blog__arrow"
                />
              </div>
            </Link>
          ))}
        </section>
      )}

      {!tiles && (
        <section className="main-blog__container--list">
          {props.map((prop, i) => (
            <Link href={prop.slug} key={i}>
              <div key={i} className="main-blog__list">
                <Image src="/document_icon.svg" alt="dokument" width="150" height="150" />
                <span>
                  <h2>{prop.title}</h2>
                  <p>{prop.title}</p>
                  <Image
                    src="/arrow.svg"
                    alt="arrow"
                    width="20"
                    height="20"
                    className="main-blog__arrow"
                  />
                </span>
              </div>
            </Link>
          ))}
        </section>
      )}
    </Layout>
  )
}
