import React from 'react'
import pathOr from 'ramda/src/pathOr'
import './read-more.scss'

const nextPostPath = ['next', 'node', 'frontmatter', 'path']
const nextPostTitle = ['next', 'node', 'frontmatter', 'title']
const prevPostPath = ['prev', 'node', 'frontmatter', 'path']
const prevPostTitle = ['prev', 'node', 'frontmatter', 'title']

const ReadMore = ({ posts, tags }) => {
  const firstPath = pathOr(null, nextPostPath, posts)
  const firstTitle = pathOr(null, nextPostTitle, posts)
  const secondPath = pathOr(null, prevPostPath, posts)
  const secondTitle = pathOr(null, prevPostTitle, posts)

  return (
    <section className="read-more-container">
      <div className="related-item next-post">
        <a href={firstPath} className="related-link">
          <div className="related-data">
            <span className="related-label">Read Next</span>
            <h2 className="related-title">{firstTitle}</h2>
          </div>
        </a>
        <a href="./" className="related-additional">
          <div className="wrapper-wide">
            <span className="underscore">All {tags[0]} Articles</span>
          </div>
        </a>
      </div>
      <div className="related-item prev-post">
        <a href={secondPath} className="related-link">
          <div className="related-data">
            <span className="related-label">Read Next</span>
            <h2 className="related-title">{secondTitle}</h2>
          </div>
        </a>
        <a href="./" className="related-additional">
          <div className="wrapper-wide">
            <span className="underscore">All {tags[1]} Articles</span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default ReadMore
