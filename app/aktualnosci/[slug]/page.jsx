'use client'

import { useQuery } from '@apollo/client'
import client from '@/lib/apolloClient'
import { GET_TRANSMISSION } from '@/lib/queries'
import Post from '@/template/post'

export default function AktualnosciPost({ params }) {
  const index = params.slug.indexOf('aktualnosci/')
  const slug = params.slug.substring(index)

  const { loading, error, data } = useQuery(GET_TRANSMISSION, {
    variables: { slug: slug },
    client,
  })

  if (loading) return <h1>Ładowanie danych...</h1>
  if (error) return <h1>Błąd pobierania danych: {error.message}</h1>

  const transmission = data?.TransmissionBySlug || []

  return <Post data={transmission} params="aktualnosci" />
}
