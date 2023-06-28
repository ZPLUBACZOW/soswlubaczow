import { Layout } from '@/template/layout'
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import { useRouter } from 'next/router'
import CustomImage from '@/components/custom-image'

export default function Post({ movie }) {
  const { title, releaseDate, image, description, images } = movie
  const router = useRouter()

  return (
    <Layout title={title} styleName="post">
      <CustomImage
        src={image.url}
        alt={title}
        width="740"
        height="550"
        className="main-post__main-image"
      />

      <p className="main-post__date">{releaseDate}</p>
      <h1 className="main-post__title">{title}</h1>
      <hr className="main-post__border" />

      <article
        className="main-post__content"
        dangerouslySetInnerHTML={{ __html: description.html }}
      />

      <p className="main-post__return" onClick={() => router.back()}>
        ← Wróć do bloga
      </p>

      {images[0] && (
        <>
          <hr className="main-post__border" />
          <section className="main-post__galery">
            {images.map((image, i) => (
              <CustomImage key={i} src={image.url} alt={title} width="400" height="400" />
            ))}
          </section>

          <p className="main-post__return" onClick={() => router.back()}>
            ← Wróć do bloga
          </p>
        </>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const slug = params.slug[0]

  const { data } = await client.query({
    query: gql`
      query movieBySlug($slug: String!) {
        hypers(where: { slug: $slug }) {
          title
          releaseDate
          image {
            url
          }
          description {
            html
          }
          slug
          images {
            url
          }
        }
      }
    `,
    variables: { slug },
  })
  const { hypers } = data
  const movie = hypers[0]

  return { props: { movie: movie } }
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        hypers {
          slug
        }
      }
    `,
  })
  const { hypers } = data
  const paths = hypers.map((movie) => ({
    params: { slug: [movie.slug] },
  }))

  return { paths, fallback: false }
}
