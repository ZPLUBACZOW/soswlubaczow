'use client'

import { useQuery } from '@apollo/client'
import client from '@/lib/apolloClient'
import { GET_DOCUMENTS } from '@/lib/queries'
import List from '@/template/list'

export default function Dokumenty() {
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path
        d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z"
        scale="1"
      />
    </svg>
  )

  const { loading, error, data } = useQuery(GET_DOCUMENTS, { client })

  const documents = data?.Documents || []

  if (error) return <h1>Błąd pobierania danych: {error.message}</h1>

  return (
    <List
      title="Dokumenty"
      titleSpan="Potrzebne dokumenty!"
      icon={svg}
      props={documents}
    />
  )
}
