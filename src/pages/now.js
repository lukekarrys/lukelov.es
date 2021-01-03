import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Now" />
    <h1>Here's what I'm up to right now (updated 2020-12-06):</h1>
    <p>
      <a href="https://adventofcode.com">Advent of Code</a> – I tried AoC once
      in 2017 and only completed Day 2 before bailing. This year I got on a roll
      the first week and am realy enjoying myself. It feels fun in December 2020
      to solve pointless puzzles.
    </p>
    <p>
      <a href="https://lukekarrys.com">lukekarrys.com</a> – My previous personal
      site had a picture of me from my wedding day which is almost 3 kids ago. I
      decided to update it with the color scheme I was using for my resume. I
      tried to keep it simple and do fun/silly stuff while keeping it accessible
      with <code>prefers-reduced-motion</code>.
    </p>
    <p>
      <a href="/tags/bikes">bikes</a> &amp;{" "}
      <a href="/tags/coffeeneuring">coffee</a> – After going through a running
      injury, I had to find a different way to stay active and generate
      seratonin to keep the brain baddies at bay. While I enjoyed the
      competitive side of running and pushing to get faster for races, with
      biking I've enjoyed slow commute/bikepacking style rides where I get to
      haul gear, stop and make/buy coffee, and take pictures. I'm doing the
      Coffeeneuring Challenge for 2020 which has been a great excuse to get out
      on my bike.
    </p>
    <p>
      <a href="https://www.instagram.com/lukes.outside/">Instagram</a> – I made
      a public Instagram to share outdoor stuff that I like doing. So far it's
      mostly biking but I'm sure it will change with the (life) seasons.
    </p>
    <p>
      <a href="https://livefromquarantine.club">livefromquarantine.club</a> –
      Some musicians I like have been doing daily or weekly streams from home so
      I built this site to make it easy to jump between songs in different
      videos. (Over-)engineering the automated data pipeline for{" "}
      <a href="https://livefromquarantine.club/bengibbard">multiple</a>{" "}
      <a href="https://livefromquarantine.club/benfolds">artists</a> has been a
      fun distraction right now. I also used it as an excuse to learn how state
      machines and TypeScript work together and that was a wild ride.
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
