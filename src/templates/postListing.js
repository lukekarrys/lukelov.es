import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext, data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node)
  const { title, currentPage, totalPages } = pageContext

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.fields.slug} className="post">
            <span className="date">{post.frontmatter.date}</span>
            <br />
            {post.frontmatter.externalLink ? (
              <a href={post.frontmatter.externalLink}>
                {post.frontmatter.title} →
              </a>
            ) : (
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            )}
          </li>
        ))}
      </ul>
      <Pagination {...{ currentPage, totalPages }} />
    </Layout>
  )
}

const Pagination = ({ currentPage, totalPages }) => {
  const toIndex = (p) => (p === "/page1" ? "/" : p)
  const hasOlder = currentPage < totalPages
  const hasNewer = currentPage > 1

  if (!hasOlder && !hasNewer) return null

  return (
    <div className="pagination">
      {hasNewer ? (
        <Link
          className="pagination-item newer"
          to={toIndex(`/page${currentPage - 1}`)}
        >
          Prev
        </Link>
      ) : (
        <span className="pagination-item newer">Prev</span>
      )}
      {hasOlder ? (
        <Link
          className="pagination-item older"
          to={toIndex(`/page${currentPage + 1}`)}
        >
          Next
        </Link>
      ) : (
        <span className="pagination-item older">Next</span>
      )}
    </div>
  )
}

export const query = graphql`
  query($limit: Int, $skip: Int, $filter: MarkdownRemarkFilterInput) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: $filter
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            externalLink
            tags
          }
        }
      }
    }
  }
`
