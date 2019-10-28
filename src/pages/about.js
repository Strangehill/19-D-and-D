import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/layout"

const H1 = styled.h1`
  margin-top: 0;
`

const AboutPage = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <H1>
          About
        </H1>
        <blockquote>
          Dare to defy death in this adventure for the world's greatest
          roleplaying game.
          The talk of the streets and taverns has all been about the so-called
          death curse: a wasting disease afflicting everyone who's ever been
          raised from the dead. Victims grow thinner and weaker each day,
          slowly but steadily sliding toward the death they once denied.
        </blockquote>
        <p>
          <ul>
            <li>
              <a href="https://forgottenrealms.fandom.com/wiki/Tomb_of_Annihilation">
                Forgotten Realms Fandom.com wiki
              </a>
            </li>
            <li>
              <a href="https://dnd.wizards.com/products/tabletop-games/rpg-products/tomb-annihilation">
                dnd.wizards.com Product Overview
              </a>
            </li>
          </ul>
        </p>
        <p>
          Go {` `}
          <Link to="/">
            back to the homepage
          </Link>
          .
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
