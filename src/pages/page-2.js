import React from "react"
import { Link } from "gatsby"

import Layout from "../components/includes/layout"
import SEO from "../components/includes/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hello from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
