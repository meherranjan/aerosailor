import React from "react"
import { graphql } from "gatsby"

import PostLink from "../components/core/post-link"
import SEO from "../components/includes/seo/"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <div>
      <SEO />
      {Posts}
    </div>)
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