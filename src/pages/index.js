import React from 'react'

import SEO from '../components/includes/seo'
import Header from '../components/includes/header/header'
// import Footer from "../components/includes/footer/footer"
import GlobalStyles from '../components/includes/fonts'
import LandingSection from '../components/core/landing/landing'

const IndexPage = () => (
  <main className="layout-dark">
    <GlobalStyles />
    <SEO />
    <div className="lines">
      <span className="line line-1" style={{ height: '100%' }} />
      <span className="line line-2" style={{ height: '100%' }} />
      <span className="line line-3" style={{ height: '100%' }} />
    </div>
    <Header />
    {/* <LandingSection /> */}
    {/* <Footer /> */}
  </main>
)

export default IndexPage
