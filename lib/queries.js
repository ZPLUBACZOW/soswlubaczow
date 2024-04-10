import { gql } from '@apollo/client'

//* Transmission
export const GET_TRANSMISSIONS = gql`
  query getTransmissions {
    Transmissions {
      id
      title
      slug
      date
      mainImage
      content
      files
      images
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
      mainImage
      content
      files
      images
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
      mainImage
      content
      files
      images
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
      mainImage
      content
      files
      images
    }
  }
`

//* Our Passion
export const GET_OURPASSIONS = gql`
  query getOurPassions {
    OurPassions {
      id
      title
      icon
      images
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
      file
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
      file
    }
  }
`
