import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data: { markdownRemark: post } }) => {
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

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY - h:mm:ssa")
        tags
      }
    }
  }
`
