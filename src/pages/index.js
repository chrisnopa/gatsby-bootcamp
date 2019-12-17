import React from "react"
import { Link } from "gatsby"
import Footer from '../components/footer'
import Header from '../components/header'


const IndexPage = () => {
  return (
    <div>
      <Header/>
      <h1>Hello,</h1>
      <h2>I'm Chris, a webdeveloper</h2>
      <p>
        Need an UX designer? <a href="/contact">Contact me</a>
      </p>
      <p>
        Need an UX designer? <Link to="/contact">Contact me</Link>
      </p>
      <Footer/>
    </div>
  )
}

export default IndexPage
