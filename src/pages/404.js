import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <h1>h1 Whoa! This page does not exist.</h1>
    <p>
      <Link to="/">Head back home</Link> to try finding it again.
    </p>
  </Layout>
)

export default NotFoundPage
