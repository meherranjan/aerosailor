import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../../components/includes/seo/"
import Header from "../../components/includes/header/header"
import GlobalStyles from "../../components/includes/fonts"
import PostTags from "../../components/core/post-tags"
// import PostSEO from "../core/post-seo"
import './post.scss'

const Post = ({
  data
}) => {
  const { fields: { readingTime }, frontmatter: { created, modified, title, tags }, html } = data.markdownRemark
  return (
    <Fragment>
      <GlobalStyles />
      <SEO />
      <Header />
      <div className="blog-post-container">
        {/* <PostSEO {...markdownRemark} /> */}
        <PostTags list={tags} />
        <div className="blog-post">
          <h1 className='post-title'>{title}</h1>
          <div className="post-date">
            <span>{ created }</span>
            <span> — </span>
            <span>{ readingTime.text }</span>
          </div>
          <div className="post-date">
            <span>New Update Added On</span> 
            <span> — </span>
            <span>{modified}</span>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>

    </Fragment>
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
        tags
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

export default Post