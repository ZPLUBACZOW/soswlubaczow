import './style/post.scss'
import Link from 'next/link'
import ScaledImage from '@/components/scaledImage'
import { notFound } from 'next/navigation'

export default function Post({ data, params }) {
  return data ? (
    <main className="post">
      <ScaledImage
        src={data.mainImage}
        alt={`${data.title} | ${data.mainImage}`}
        width="740"
        height="550"
        className="post__main-image"
      />

      {data.date ? <p className="post__date">{data.date}</p> : <br />}
      <h1 className="post__title">{data.title}</h1>
      <hr className="post__border" />

      <article
        className="post__content"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />

      {data.files && (
        <section className="post__files">
          {data.files.map((file) => (
            <Link href={file.url} key={file}>
              <p>{file}</p>
            </Link>
          ))}
        </section>
      )}

      <Link href={`/${params}`} className="post__return">
        ← Wróć do bloga
      </Link>

      {data.images && (
        <>
          <hr className="post__border" />
          <section className="post__galery">
            {data.images.map((image) => (
              <ScaledImage
                key={image}
                src={image}
                alt={`${data.title} | ${image}`}
                width="500"
                height="500"
                className="post__galery--image"
              />
            ))}
          </section>

          <Link href={`/${params}`} className="post__return">
            ← Wróć do bloga
          </Link>
        </>
      )}
    </main>
  ) : (
    notFound()
  )
}
