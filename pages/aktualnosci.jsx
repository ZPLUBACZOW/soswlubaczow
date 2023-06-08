import Blog from '@/template/blog'
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'

export default function Aktualnosci({ hypers }) {
  return (
    <>
      <Blog Pagetitle="Aktualności" title="Najnowsze wiadomości!!" props={hypers} />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        hypers {
          title
          releaseDate
          image {
            url
          }
          description {
            raw
          }
          slug
        }
      }
    `,
  })
  const { hypers } = data
  return {
    props: {
      hypers,
    },
  }
}
