import './style/post.scss'
import Link from 'next/link'
import ScaledImage from '@/components/scaledImage'
import { notFound } from 'next/navigation'

export default async function Post({ data, params }) {
  const post = await data[0]

  return data[0] ? (
    <main className="post">
      <ScaledImage
        src={post.mainImage.url}
        alt={`${post.title} | ${post.mainImage.fileName}`}
        width="740"
        height="550"
        className="post__main-image"
      />

      {post.date ? <p className="post__date">{post.date}</p> : <br />}
      <h1 className="post__title">{post.title}</h1>
      <hr className="post__border" />

      <article
        className="post__content"
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      />

      {post.files[0] && (
        <section className="post__files">
          {post.files.map((file) => (
            <Link href={file.url} key={file.fileName}>
              <p>{file.fileName}</p>
            </Link>
          ))}
        </section>
      )}

      <Link href={`/${params}`} className="post__return">
        ← Wróć do bloga
      </Link>

      {post.images[0] && (
        <>
          <hr className="post__border" />
          <section className="post__galery">
            {post.images.map((image) => (
              <ScaledImage
                key={image.fileName}
                src={image.url}
                alt={`${post.title} | ${image.fileName}`}
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
