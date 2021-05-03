import React from 'react'
import { graphql } from 'gatsby'

import PostLink from '../components/core/post-link'
import SEO from '../components/includes/seo'
import Header from '../components/includes/header/header'
import Footer from '../components/includes/footer/footer'
import GlobalStyles from '../components/includes/fonts'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <main>
      <GlobalStyles />
      <SEO />
      <Header />
      <div className="latest-post-section">
        <h3>
          Latest <i />
        </h3>
      </div>
      <PostLink edges={edges} />
      <Footer />
    </main>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___created] }) {
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
                fluid(maxWidth: 400, maxHeight: 180) {
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
