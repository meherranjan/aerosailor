import React from "react"

import SEO from "../components/includes/seo"
import Header from "../components/includes/header/header"
import Footer from "../components/includes/footer/footer"
import GlobalStyles from "../components/includes/fonts"

const IndexPage =
  () => 
      <main>
        <GlobalStyles />
        <SEO />
        <Header />
        <div>
            I am a main page.
        </div>
        <Footer />
      </main>

export default IndexPage
