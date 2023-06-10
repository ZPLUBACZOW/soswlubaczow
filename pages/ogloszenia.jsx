import Blog from '@/template/blog'
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'

export default function Ogloszenia({ hypers }) {
  return (
    <Blog
      tiles={true}
      Pagetitle="Ogłoszenia"
      title="Ogłoszenia z naszej placówki!!"
      props={hypers}
    />
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        hypers(first: 1000, orderBy: releaseDate_DESC) {
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
