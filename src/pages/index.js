import React from "react"

import SEO from "../components/includes/seo"
import Header from "../components/includes/header/header"
import Footer from "../components/includes/footer/footer"
import GlobalStyles from "../components/includes/fonts"
import LandingSection from "../components/core/landing"

const IndexPage =
  () => 
      <main>
        <GlobalStyles />
        <SEO />
        <Header />
        <LandingSection />
        {/* <Footer /> */}
      </main>

export default IndexPage
