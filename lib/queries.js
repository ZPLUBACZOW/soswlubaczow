export async function fetchGraphQL(query, variables) {
  const response = await fetch(
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clj8wzw681n4b01t655fi7v6u/master',
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    }
  )
  const { data } = await response.json()

  return data
}

export async function getNewsPosts() {
  const { news } = await fetchGraphQL(`
  query getNewsPosts {
    news(first: 1000, orderBy: date_DESC) {
      id
      title
      slug
      date
      mainImage { url }
    }
  }
  `)

  return news
}
export async function getNewsPostBySlug(params) {
  const { news } = await fetchGraphQL(
    `
      query getNewsPostBySlug($slug: String!) {
        news(where: { slug: $slug }) {
        title
        slug
        date
        mainImage { url fileName }
        content { html }
        files(first: 100) {
          id
          url
          fileName
        }
        images(first: 100) {
          id
          url
          fileName
        }
      }
    }
  `,
    { slug: params.slug }
  )
  return news
}

export async function getAnnouncementsPosts() {
  const { announcements } = await fetchGraphQL(`
  query getAnnouncementsPosts {
    announcements(first: 1000, orderBy: date_DESC) {
      id
      title
      slug
      date
      mainImage { url }
    }
  }
  `)

  return announcements
}
export async function getAnnouncementsPostBySlug(params) {
  const { announcements } = await fetchGraphQL(
    `
      query getAnnouncementsPostBySlug($slug: String!) {
        announcements(where: { slug: $slug }) {
        title
        slug
        date
        mainImage { url fileName }
        content { html }
        files(first: 100) {
          id
          url
          fileName
        }
        images(first: 100) {
          id
          url
          fileName
        }
      }
    }
  `,
    { slug: params.slug }
  )
  return announcements
}

export async function getforParentsPosts() {
  const { forParents } = await fetchGraphQL(`
  query getforParentsPosts {
    forParents(first: 1000) {
      id
      title
      description
      file { url }
    }
  }
  `)

  return forParents
}

export async function getDocumentsPosts() {
  const { documents } = await fetchGraphQL(`
  query getDocumentsPosts {
    documents(first: 1000) {
      id
      title
      description
      file { url }
    }
  }
  `)

  return documents
}

export async function getAvailabilities() {
  const { availabilities } = await fetchGraphQL(`
  query getAvailabilitiesPosts {
    availabilities(first: 1000) {
      id
      title
      description
      file { url }
    }
  }
  `)

  return availabilities
}

export async function getOurPassions() {
  const { ourPassions } = await fetchGraphQL(`
  query getOurPassions {
    ourPassions(first: 1000) {
      title
      icon { url }
      images { id url }
    }
  }
  `)

  return ourPassions
}
