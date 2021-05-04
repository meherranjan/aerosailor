import React from 'react'

import SEO from '../components/includes/seo'
import Header from '../components/includes/header/header'
import Footer from '../components/includes/footer/footer'
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
    <div id="main" className="content loaded">
      <div id="page-content" class="page-content">
        <div className="section">
          <div className="wrapper-small">
            <div className="c-col-12">
              <div className="text-wrapper">
                <h1 className="big-title has-animation skew-up is-inview" data-scroll="true">
                  <div>Hello!</div>
                  <div>I am Meher.</div>
                </h1>
              </div>
            </div>
            <div className="c-col-4 hide-mobile"></div>
            <div className="c-col-8">
              <div className="text-wrapper">
                <p data-delay="0.4" className="big-p has-animation lines-up is-inview"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    {/* <LandingSection /> */}
  </main>
)

export default IndexPage
