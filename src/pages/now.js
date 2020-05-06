import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Now" />
    <h1>Here's what I'm up to right now:</h1>
    <p>
      <a href="https://livefromquarantine.club">livefromquarantine.club</a> – Some musicians I like have been doing daily or weekly streams from home so I built this site to make it easy to jump between songs in different videos. (Over-)engineering the automated data pipeline has been a fun distraction right now.
    </p>
    <p></p>
    <p></p>
  </Layout>
)

export default NotFoundPage
