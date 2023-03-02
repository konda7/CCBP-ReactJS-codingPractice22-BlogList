import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, publishedDate, description} = blogDetails

  return (
    <li className="post-container">
      <div className="name-date-container">
        <h1 className="post-title">{title}</h1>
        <p className="post-publishDate">{publishedDate}</p>
      </div>
      <p className="post-description">{description}</p>
    </li>
  )
}

export default BlogItem
