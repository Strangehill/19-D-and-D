import React from "react"
import styled from 'styled-components'
import { rhythm } from "../utils/typography"

import StyledLink from "./styledLink"

const Navbar = ({ className }) => {
  return (
    <nav className={className}>
      <StyledLink to="/about/">About</StyledLink>
      <StyledLink to="/blog/">Blog</StyledLink>
        {` `}
      <StyledLink to="/characters/">Characters</StyledLink>
        {` `}
      <StyledLink to="/maps/">Maps</StyledLink>
    </nav>
  )
}

const StyledNavbar = styled(Navbar)`
  text-align: right;
  margin-bottom: ${rhythm(1)};
  > * {
    :not(:first-child) {
      margin-left: 1rem;
    }
  }
`

export default StyledNavbar
