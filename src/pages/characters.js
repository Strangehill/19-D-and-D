import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const CharactersPage = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <p>
        Three of the characters.
      </p>
        {data.allFile.edges.map(({node}) => (
        <Img fixed={node.childImageSharp.fixed} />
      ))}
    </Layout>
  )
}

export default CharactersPage

export const charactersPageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: {relativeDirectory: {eq: "characters" }}) {
      edges {
        node {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`


