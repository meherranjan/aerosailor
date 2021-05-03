import React from 'react'
import './post-tags.scss'

const PostTags = ({ list }) => (
  <div className="post-categories">
    {list.map((tag, key) => (
      <a href={`/tags/${tag}`} key={key}>
        {tag}
      </a>
    ))}
  </div>
)

export default PostTags
