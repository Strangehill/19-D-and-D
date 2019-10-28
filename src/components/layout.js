import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import StyledLink from "./styledLink"
import StyledNavbar from './styledNavbar'

import { rhythm, scale } from "../utils/typography"

const H1 = styled.h1`
  ${{...scale(1.5)}};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`
const H3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
`
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(44)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`
const Header = styled.header`
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`
const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `)
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <header>
        <H1>
          <StyledLink to={'/'}>
            {title}
          </StyledLink>
        </H1>
        <StyledNavbar />
      </header>
    )
  } else {
    header = (
      <Header>
        <H3>
          <StyledLink to={'/'} >
            {title}
          </StyledLink>
        </H3>
        <StyledNavbar />
      </Header>
    )
  }
  return (
    <Container>
      {header}
      <main>{children}</main>
      <footer>
        <a href="https://www.github.com/strangehill/19-D-and-D/">Built</a>
        {` `}
        for game night, by
        {` `}
        <a href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}>
          Antonio
        </a>
        .
      </footer>
  </Container>
  )
}

export default Layout
