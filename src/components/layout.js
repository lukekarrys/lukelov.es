import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "../styles/main.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container">
      <div className="site">
        <div className="header">
          <h1 className="title">
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </h1>
          <Link className="extra" to="/">
            home
          </Link>
          <Link className="extra" to="/now">
            now
          </Link>
          <Link className="extra" to="https://photos.lukelov.es">
            photos
          </Link>
          <Link className="extra" to="https://instagram.com/lukes.outside">
            &lsquo;gram
          </Link>
        </div>
        <main>{children}</main>
        <div className="footer">
          <div className="contact">
            <p>
              I'm <a href="http://lukekarrys.com">Luke</a>.<br />I live in
              Arizona but I'm fron the Internat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
