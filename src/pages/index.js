import React from "react"
import { graphql } from "gatsby"

import PostLink from "../components/core/post-link"
import SEO from "../components/includes/seo/"
import Header from "../components/includes/header/header"
import Footer from "../components/includes/footer/footer"
import GlobalStyles from "../components/includes/fonts"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts =
    edges
      .filter(edge => !!edge.node.frontmatter.created)
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <main>
      <GlobalStyles />
      <SEO />
      <Header />
      <article>
        {/* {posts} */}
      </article>
      {/* <Footer /> */}
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
          }
        }
      }
    }
  }
`