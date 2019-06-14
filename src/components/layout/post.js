import React from "react"
import { graphql } from "gatsby"
// import PostSEO from "../core/post-seo"

const Post = ({
  data,
}) => {
  const { markdownRemark } = data
  const { frontmatter: { created, modified, title }, html } = markdownRemark
  return (
    <div className="blog-post-container">
    {/* <PostSEO {...markdownRemark} />
    {console.log(markdownRemark)} */}
      <div className="blog-post">
        <h1>{title}</h1>
        <h2>Created on: {created}</h2>
        <h3>Update on: {modified}</h3>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query ($slug: String!){
    markdownRemark (fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        created(formatString: "MMMM DD, YYYY")
        modified(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default Post