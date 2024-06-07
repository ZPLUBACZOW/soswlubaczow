import { gql } from '@apollo/client'

//* Transmission
export const GET_TRANSMISSIONS = gql`
  query getTransmissions {
    Transmissions {
      id
      title
      slug
      date
      mainImage {
        id
        name
        description
        url
        extension
        size
      }
      content
      files {
        id
        name
        description
        url
        extension
        size
      }
      images {
        id
        name
        description
        url
        extension
        size
      }
    }
  }
`

export const GET_TRANSMISSION = gql`
  query getTransmissionBySlug($slug: String!) {
    TransmissionBySlug(slug: $slug) {
      id
      title
      slug
      date
      mainImage {
        id
        name
        description
        url
        extension
        size
      }
      content
      files {
        id
        name
        description
        url
        extension
        size
      }
      images {
        id
        name
        description
        url
        extension
        size
      }
    }
  }
`

//* Announcement
export const GET_ANNOUNCEMENTS = gql`
  query getAnnouncements {
    Announcements {
      id
      title
      slug
      date
      mainImage {
        id
        name
        description
        url
        extension
        size
      }
      content
      files {
        id
        name
        description
        url
        extension
        size
      }
      images {
        id
        name
        description
        url
        extension
        size
      }
    }
  }
`

export const GET_ANNOUNCEMENT = gql`
  query getAnnouncementBySlug($slug: String!) {
    AnnouncementBySlug(slug: $slug) {
      id
      title
      slug
      date
      mainImage {
        id
        name
        description
        url
        extension
        size
      }
      content
      files {
        id
        name
        description
        url
        extension
        size
      }
      images {
        id
        name
        description
        url
        extension
        size
      }
    }
  }
`

//* Our Passion
export const GET_OURPASSIONS = gql`
  query getOurPassions {
    OurPassions {
      id
      title
      icon {
        id
        name
        description
        url
        extension
        size
      }
      images {
        id
        name
        description
        url
        extension
        size
      }
    }
  }
`

//* For Parent
export const GET_FORPARENTS = gql`
  query getForParents {
    ForParents {
      id
      title
      description
      file {
        id
        name
        description
        url
        extension
        size
      }
    }
  }
`

//* Document
export const GET_DOCUMENTS = gql`
  query getDocuments {
    Documents {
      id
      title
      description
      file {
        id
        name
        description
        url
        extension
        size
      }
    }
  }
`
