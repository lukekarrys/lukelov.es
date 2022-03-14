import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Now" />
    <h1>Here's what I'm up to right now (updated 2022-03-13):</h1>
    <p>
      <a href="https://bracket.club">bracket.club</a> – It's bracket club season
      again. I didn't do much to the site this year except get it up and running
      but hopefully I can get some new ideas and tech into it for next year.
    </p>
    <p>
      <a href="https://github.com/npm/template-oss">@npmcli/template-oss</a> –
      This is a templating project I worked on with my team to try and bring
      some order to our 80-ish open source repos we manage. It's been a lot of
      fun solving this problem and see the fruits of that labor.
    </p>
    <p>
      <a href="https://www.instagram.com/lukes.outside/">Instagram</a> – I made
      a public Instagram to share outdoor stuff that I like doing. So far it's
      mostly biking but I'm sure it will change with the (life) seasons.
    </p>
    <p>
      <a href="https://photos.lukelov.es">photos.lukelov.es</a> – A photo blog
      thing I forked from{" "}
      <a href="https://github.com/maxvoltar/photo-stream">@maxvoltar</a>. It's
      been a lot of fun to edit photos with VSCO on my phone and commit them
      with Working Copy and it deploys with Netlify. I like that I can do the
      whole thing from my phone.
    </p>
  </Layout>
)

export default NotFoundPage
