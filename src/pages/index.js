import React from "react"
import { Link } from "gatsby"

import Layout from "../components/includes/layout"
import SEO from "../components/includes/seo"

import "purecss/build/pure-min.css"
import "purecss/build/grids-responsive.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
