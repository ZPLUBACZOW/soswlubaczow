'use client'

import { useQuery } from '@apollo/client'
import client from '@/lib/apolloClient'
import { GET_TRANSMISSION } from '@/lib/queries'
import Post from '@/template/post'

export default function AktualnosciPost({ params }) {
  const { loading, error, data } = useQuery(GET_TRANSMISSION, {
    variables: { slug: params.slug },
    client,
  })

  const transmission = data?.TransmissionBySlug || []

  if (error) return <h1>Błąd pobierania danych: {error.message}</h1>

  return <Post data={transmission} params="aktualnosci" />
}
