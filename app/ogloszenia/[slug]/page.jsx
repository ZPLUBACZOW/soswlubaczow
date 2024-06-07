'use client'

import { useQuery } from '@apollo/client'
import client from '@/lib/apolloClient'
import { GET_ANNOUNCEMENT } from '@/lib/queries'
import Post from '@/template/post'

export default function AktualnosciPost({ params }) {
  const index = params.slug.indexOf('ogloszenia/')
  const slug = params.slug.substring(index)

  const { loading, error, data } = useQuery(GET_ANNOUNCEMENT, {
    variables: { slug: slug },
    client,
  })

  const announcement = data?.AnnouncementBySlug || []

  if (loading) return <h1>Ładowanie danych...</h1>
  if (error) return <h1>Błąd pobierania danych: {error.message}</h1>

  return <Post data={announcement} params="ogloszenia" />
}
