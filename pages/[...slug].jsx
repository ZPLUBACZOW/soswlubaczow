import { Layout } from '@/template/layout'
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'
import { useRouter } from 'next/router'
import CustomImage from '@/components/custom-image'

export default function Post({ post }) {
  const { title, date, mainImage, content, files, images } = post
  const router = useRouter()

  return (
    <Layout title={title} styleName="post">
      <CustomImage
        src={mainImage.url}
        alt={title}
        width="740"
        height="550"
        className="main-post__main-image"
      />

      <p className="main-post__date">{date}</p>
      <h1 className="main-post__title">{title}</h1>
      <hr className="main-post__border" />

      <article
        className="main-post__content"
        dangerouslySetInnerHTML={{ __html: content.html }}
      />

      <p className="main-post__return" onClick={() => router.back()}>
        ← Wróć do bloga
      </p>

      {images[0] && (
        <>
          <hr className="main-post__border" />
          <section className="main-post__galery">
            {images.map((image, i) => (
              <CustomImage
                key={i}
                src={image.url}
                alt={title}
                width="500"
                height="500"
                className="main-post__galery--image"
              />
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
      query postBySlug($slug: String!) {
        posts(where: { slug: $slug }) {
          title
          slug
          date
          mainImage {
            url
          }
          content {
            html
          }
          files {
            url
          }
          images {
            url
          }
        }
      }
    `,
    variables: { slug },
  })
  const { posts } = data
  const post = posts[0]

  return { props: { post: post } }
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          slug
        }
      }
    `,
  })
  const { posts } = data
  const paths = posts.map((post) => ({
    params: { slug: [post.slug] },
  }))

  return { paths, fallback: false }
}
