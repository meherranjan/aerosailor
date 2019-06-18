import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostLink = ({ edges }) => {
  return edges
    .filter(edge => !!edge.node.frontmatter.created)
    .map(edge => {
      let fm = edge.node.frontmatter;
      return <article key={edge.node.id}>
        <div className="post-image">
          <Img
            fluid={fm.thumbnail.childImageSharp.fluid}
            alt={fm.title} />
        </div>
        <div className="post-date">
          {fm.created}
        </div>
        <div className="post-title-link">
          <Link to={fm.path}>
            {fm.title}
          </Link>
        </div>
      </article>
    }
    )
}

export default PostLink