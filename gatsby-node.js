const path = require("path")
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

const createPostPages = ({ actions, posts }) => {
  posts.forEach(post => {
    actions.createPage({
      path: post.fields.slug,
      component: path.resolve(`src/templates/post.js`),
      context: { post }
    })
  })
}

const createTagPages = ({ actions, posts }) => {
  const tagPages = posts.reduce((acc, post) => {
    post.frontmatter.tags.forEach(tag => {
      if (!acc[tag]) acc[tag] = []
      acc[tag].push(post)
    })
    return acc
  }, {})

  Object.keys(tagPages).forEach(tag => {
    actions.createPage({
      path: `/tags/${tag}`,
      component: path.resolve(`src/templates/postListing.js`),
      context: { title: `Tag: ${tag}`, posts: tagPages[tag] }
    })
  })
}

const createListingPages = ({ actions, posts, perPage = 100 }) => {
  let start = 0

  const pageGroups = Array.from(Array(Math.ceil(posts.length / perPage))).map(
    () => {
      const group = posts.slice(start, start + perPage)
      start += perPage
      return group
    }
  )

  pageGroups.forEach((posts, index) => {
    const currentPage = index + 1
    actions.createPage({
      path: currentPage === 1 ? "/" : `/page${currentPage}`,
      component: path.resolve(`src/templates/postListing.js`),
      context: {
        posts,
        title: currentPage === 1 ? "Home" : `Page ${currentPage}`,
        totalPages: pageGroups.length,
        currentPage
      }
    })
  })

  actions.createPage({
    path: `/full`,
    component: path.resolve(`src/templates/postListing.js`),
    context: { title: `All Posts`, posts }
  })
}

const createPostFields = ({ actions, node, getNode }) => {
  const { createNodeField } = actions

  const filename = createFilePath({ node, getNode })

  node.frontmatter.tags = Array.isArray(node.frontmatter.tags)
    ? node.frontmatter.tags.map(t => t.replace(/\s/g, "-"))
    : []

  createNodeField({ node, name: `slug`, value: `/articles${filename}` })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const results = await graphql(`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            html
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              tags
              externalLink
            }
          }
        }
      }
    }
  `)

  if (results.errors) {
    throw results.errors
  }

  const posts = results.data.allMarkdownRemark.edges.map(({ node }) => node)
  createListingPages({ actions, posts })
  createTagPages({ actions, posts })
  createPostPages({ actions, posts })
}

exports.onCreateNode = ({ node, ...rest }) => {
  if (node.internal.type === `MarkdownRemark`) {
    createPostFields({ node, ...rest })
  }
}
