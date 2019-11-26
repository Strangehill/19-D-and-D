import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const MapsPage = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <p>
        A map or two.
      </p>
      <Img fixed={data.file.childImageSharp.fixed} />
    </Layout>
  )
}

export default MapsPage

export const mapsPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "maps/Port-Nyanzaru.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`


