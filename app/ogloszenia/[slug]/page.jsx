'use client'

import { useQuery } from '@apollo/client'
import client from '@/lib/apolloClient'
import { GET_ANNOUNCEMENT } from '@/lib/queries'
import Post from '@/template/post'

export default function AktualnosciPost({ params }) {
  const { loading, error, data } = useQuery(GET_ANNOUNCEMENT, {
    variables: { slug: params.slug },
    client,
  })

  const announcement = data?.AnnouncementBySlug || []

  if (error) return <h1>Błąd pobierania danych: {error.message}</h1>
  return <Post data={announcement} params="ogloszenia" />
}
