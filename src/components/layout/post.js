import React, { Fragment } from "react"
import { graphql } from "gatsby"
import SEO from "../../components/includes/seo/"
import Header from "../../components/includes/header/header"
import Footer from "../../components/includes/footer/footer"
import GlobalStyles from "../../components/includes/fonts"
import PostTags from "../../components/core/post-tags"
// import PostSEO from "../core/post-seo"
import './post.scss'
import split from 'ramda/src/split'
import join from 'ramda/src/join'

const withDropCase = html => {
  let space = ' ', divider = split(space), spaced = join(space), chunks = divider(html);
  chunks[0] = `<p><span class='post-drop-case'>${chunks[0][3]}</span>`;
  return spaced(chunks)
}

const Post = ({
  data
}) => {
  const { fields: { readingTime }, frontmatter: { created, modified, title, tags }, html } = data.markdownRemark
  const htmlWithDropCase = withDropCase(html)
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
            <span>{created}</span>
            <span> — </span>
            <span>{readingTime.text}</span>
          </div>
          <div className="post-date">
            <span>New Update Added On</span>
            <span> — </span>
            <span>{modified}</span>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: htmlWithDropCase }}
          />
        </div>
      </div>
      <Footer />
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