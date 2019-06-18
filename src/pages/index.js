import React from "react"
import { graphql } from "gatsby"

import PostLink from "../components/core/post-link"
import SEO from "../components/includes/seo/"
import Header from "../components/includes/header/header"
import GlobalStyles from "../components/includes/fonts"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <main>
      <GlobalStyles />
      <SEO />
      <Header />
      <PostLink edges={edges}/>
    </main>)
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___created] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            created(formatString: "MMMM DD, YYYY")
            path
            title
            modified
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`