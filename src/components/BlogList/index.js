import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="post-list-container">
      {blogsList.map(eachPost => (
        <BlogItem key={eachPost.id} blogDetails={eachPost} />
      ))}
    </ul>
  )
}

export default BlogList
