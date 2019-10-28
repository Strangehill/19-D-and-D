/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from 'styled-components'

import { rhythm } from "../utils/typography"

const Wrapper = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/noun_Devil_Face_profile.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          compiler
          social {
            twitter
          }
        }
      }
    }
  `)

  const { compiler, social } = data.site.siteMetadata
  return (
    <Wrapper>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={compiler}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        The tooling that holds this assorted trove of clues and curiousities
        was assembled by <strong>{compiler}</strong>,
        {` `}
        who was last known to be surveying the northern backwaters.
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          You could follow him on Twitter.
        </a>
      </p>
    </Wrapper>
  )
}

export default Bio
