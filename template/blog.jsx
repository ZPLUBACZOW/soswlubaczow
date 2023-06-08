import { Layout } from '@/components/layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog({ Pagetitle, title, props }) {
  return (
    <Layout title={Pagetitle} styleName="blog">
      <h1 className="main-blog__title">{title}</h1>

      <section className="main-blog__container">
        {props.map((prop, i) => (
          <Link href={prop.slug} key={i}>
            <div key={i} className="main-blog__article">
              <Image src={prop.image.url} alt={prop.title} width="400" height="400" />
              <h2>{prop.title}</h2>
            </div>
          </Link>
        ))}
      </section>
    </Layout>
  )
}
