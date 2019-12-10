import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext }) => {
  const { post } = pageContext
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="post">
        <h1>{post.frontmatter.title}</h1>
        <p className="meta">{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div className="tags">
        {post.frontmatter.tags.map(tag => (
          <Link key={tag} className="tag" to={`/tags/${tag}`}>
            {tag}
          </Link>
        ))}
      </div>
    </Layout>
  )
}
