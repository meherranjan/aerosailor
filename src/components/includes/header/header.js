import React, { useState, useEffect } from 'react'
import './header.scss'
import cn from 'classnames'
import lightLogo from '../../../../static/icons/icon-512x512.png'
import darkLogo from '../../../../static/icons/icon-512x512-invert.png'

const Header = () => {
  const [defaultMenuHover, setDefaultMenuHover] = useState([true])
  const [onMenuClick, toggleMenuClick] = useState(false)
  const [siteNavigation, toggleSiteNavigation] = useState(false)
  const [menuItems, toggleMenuItems] = useState(true)
  const [socialItems, toggleSocialItems] = useState(true)
  const [lightNav, toggleLightNav] = useState(false)

  useEffect(() => {
    if (onMenuClick === true) {
      toggleSiteNavigation(true)
      setTimeout(() => {
        toggleLightNav(true)
      }, 250)
      setTimeout(() => {
        toggleMenuItems(true)
      }, 200)
      setTimeout(() => {
        toggleSocialItems(true)
      }, 300)
    } else {
      setTimeout(() => {
        toggleSiteNavigation(false)
      }, 380)
      setTimeout(() => {
        toggleLightNav(false)
      }, 780)
      toggleMenuItems(false)
      toggleSocialItems(false)
    }
  }, [onMenuClick])

  return (
    <div>
      <header
        className={cn('site-header light', {
          'light-nav-active': lightNav,
        })}
      >
        <div className="site-branding">
          <img className="light-logo logo-in" src={lightLogo} alt="Site Light Logo" />
          <img className="dark-logo logo-in" src={darkLogo} alt="Site Light Logo" />
        </div>

        <div className={cn('site-navigation light', { 'nav-open': siteNavigation })}>
          <span className={cn('menu-ov menu-ov-1', { 'menu-ov-in': siteNavigation })} />
          <span className={cn('menu-ov menu-ov-2', { 'menu-ov-in': siteNavigation })} />
          <span className={cn('menu-ov menu-ov-3', { 'menu-ov-in': siteNavigation })} />
          <span className={cn('menu-ov menu-ov-4', { 'menu-ov-in': siteNavigation })} />

          <div
            className={cn('menu-toggle', { 'is-active': onMenuClick })}
            onClick={() => toggleMenuClick(!onMenuClick)}
          >
            <span className="toggle-line toggle-line-1 toggle-line-in" />
            <span className="toggle-line toggle-line-2 toggle-line-in" />
          </div>

          <div className="menu-overlays" />

          <div
            className="menu-wrapper"
            style={onMenuClick ? { visibility: 'hidden' } : { visibility: 'visible' }}
          >
            <ul className="menu">
              <li
                className={cn('menu-item has-children menu-item-active', {
                  'menu-item-hover': defaultMenuHover,
                })}
              >
                <a
                  href="index.html"
                  data-hover="Home"
                  className={cn({ 'menu-item-comes': menuItems })}
                >
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="works.html"
                  data-hover="Courses"
                  className={cn({ 'menu-item-comes': menuItems })}
                >
                  Courses
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="about.html"
                  data-hover="About"
                  className={cn({ 'menu-item-comes': menuItems })}
                >
                  About
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="journal.html"
                  data-hover="Blog"
                  className={cn({ 'menu-item-comes': menuItems })}
                >
                  Blog
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="contact.html"
                  data-hover="Contact"
                  className={cn({ 'menu-item-comes': menuItems })}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className={cn('menu-widget-wrapper mww-2', { 'mww-in': socialItems })}>
            <div className="scrolling-button">
              <a href="mailto:hello@aerosailor.com">
                <div className={cn({ marquee: menuItems })}>
                  <div className="track">
                    <div className="content">
                      hello@aerosailor.com hello@aerosailor.com hello@aerosailor.com
                      hello@aerosailor.com
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="menu-widget-wrapper mww-3">
            <div className="menu-widget">
              <ul className="widget-socials">
                <li className={cn({ 'so-li-in': socialItems })}>
                  <a href="#">udemy.</a>
                </li>
                <li className={cn({ 'so-li-in': socialItems })}>
                  <a href="#">youtube.</a>
                </li>
                <li className={cn({ 'so-li-in': socialItems })}>
                  <a href="#">instagram.</a>
                </li>
                <li className={cn({ 'so-li-in': socialItems })}>
                  <a href="#">twitter.</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div id="main" className="content loaded">
        <div
          className="page-settings"
          data-layout="light"
          data-header-style="dark"
          data-menu-layout="dark"
        ></div>

        <div id="page-content" className="page-content">
          <div className="section">
            <div className="wrapper-small">
              <div className="c-col-12">
                <div className="text-wrapper">
                  <div className="caption has-animation skew-up">ABOUT THE AGENCY</div>
                  <h1 className="big-title has-animation skew-up">
                    Hello! We are <br />
                    Pe Themes.
                  </h1>
                </div>
              </div>

              <div className="c-col-4 hide-mobile"></div>

              <div className="c-col-8">
                <div className="text-wrapper">
                  <p data-delay="0.4" className="big-p has-animation lines-up">
                    {' '}
                    This vendor is incompetent product launch yet waste of resources message the
                    initiative diversify kpis high touch client. Herding cats commitment to the
                    cause yet i also believe it's important for every member to be involved and
                    invested in our company..
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="wrapper">
              <div className="c-col-12 has-animation fade-in-up">
                <div className="pe-embed-video">
                  <div
                    className="pe-video"
                    data-plyr-provider="youtube"
                    data-plyr-embed-id="LcSevy6HUQc"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="wrapper-small">
              <div className="c-col-6">
                <div className="text-wrapper">
                  <div data-delay="0.5" className="caption has-animation skew-up">
                    OUR SERVICES
                  </div>
                  <h1 className="big-title has-animation skew-up">What we create?</h1>
                </div>
              </div>

              <div className="c-col-6">
                <span className="pe-empty-space" style={{ height: '300px' }}></span>

                <div className="text-wrapper">
                  <h4 className="thin has-animation lines-up">
                    We create world-class digital products, communications, and brands. Let's see
                    what we can create for you:
                  </h4>
                </div>

                <div className="c-accordion">
                  <div className="accordion-list">
                    <ul>
                      <li className="accordion-title">
                        Creative direction
                        <p className="accordion-content ac-active">
                          Our new office is located in a workshop in a paved courtyard typical of
                          Belleville. This long building mixes several living and creative spaces on
                          different levels: a large open space for shared work
                        </p>
                      </li>
                      <li className="accordion-title">
                        Brand Indentity
                        <p className="accordion-content">
                          Our new office is located in a workshop in a paved courtyard typical of
                          Belleville. This long building mixes several living and creative spaces on
                          different levels: a large open space for shared work
                        </p>
                      </li>
                      <li className="accordion-title">
                        UI/UX Design
                        <p className="accordion-content">
                          Our new office is located in a workshop in a paved courtyard typical of
                          Belleville. This long building mixes several living and creative spaces on
                          different levels: a large open space for shared work
                        </p>
                      </li>
                      <li className="accordion-title">
                        Video / Animation
                        <p className="accordion-content">
                          Our new office is located in a workshop in a paved courtyard typical of
                          Belleville. This long building mixes several living and creative spaces on
                          different levels: a large open space for shared work
                        </p>
                      </li>
                      <li className="accordion-title">
                        Creative direction
                        <p className="accordion-content">
                          Our new office is located in a workshop in a paved courtyard typical of
                          Belleville. This long building mixes several living and creative spaces on
                          different levels: a large open space for shared work
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section" data-background="#121212">
            <div className="wrapper-small">
              <div className="c-col-6 hide-mobile"></div>

              <div className="c-col-6">
                <div className="text-wrapper">
                  <div style={{ color: '#ededed' }} className="caption has-animation skew-up">
                    THE TARGET
                  </div>
                  <h1 style={{ color: '#ededed' }} className="big-title has-animation skew-up">
                    Company Goals
                  </h1>
                </div>
              </div>

              <div className="c-col-8">
                <div className="text-wrapper">
                  <div style={{ color: '#ededed' }} className="caption has-animation skew-up">
                    OUR MISSION
                  </div>
                  <h4 style={{ color: '#ededed' }} className="thin has-animation lines-up">
                    Onward and upward, productize the deliverables and focus on the bottom line this
                    is meaningless core competencies, or a loss a day will keep you focus but enough
                    to wash your face but that's mint, well done. Not the long pole in my tent
                    synergestic actionablesç
                  </h4>
                </div>
              </div>
            </div>

            <div className="wrapper-full">
              <div className="c-col-12 no-gap">
                <div className="image-wrapper send-back">
                  <img src="images/ab-img.png" alt="Single Image" />
                </div>
              </div>
            </div>

            <div className="wrapper-small">
              <div className="c-col-8">
                <div className="text-wrapper">
                  <div style={{ color: '#ededed' }} className="caption has-animation skew-up">
                    OUR VISION
                  </div>
                  <h3 style={{ color: '#ededed' }} className="thin has-animation lines-up">
                    Eat our own dog food run it up the flagpole, ping the boss and circle back
                    throughput for execute , yet mobile friendly. Win-win-win blue money draw a line
                    in the sand, for going forward, pivot.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="wrapper-small">
              <div className="c-col-12">
                <div className="text-wrapper align-center">
                  <div className="caption">OUR TEAM</div>
                  <h1 className="big-title">
                    Good people,
                    <br /> big projects.
                  </h1>
                </div>
              </div>
            </div>

            <div className="wrapper-full">
              <div className="c-col-3 no-gap">
                <span className="pe-empty-space" style={{ height: '120px' }}></span>

                <div className="team-member">
                  <div className="team-member-image">
                    <img src="images/team/5.png" alt="Team Member Image" />
                  </div>

                  <div className="team-member-details">
                    <div className="team-member-name">Blossom Pugh</div>

                    <span className="team-member-pos">Co-Founder</span>
                  </div>

                  <ul className="member-socials">
                    <li>
                      <a style={{ color: '#053eff' }} target="_blank" href="http://behance.net">
                        <i className="icon-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#ea4c89' }} target="_blank" href="#">
                        <i className="icon-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#08a0e9' }} target="_blank" href="#">
                        <i className="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#3b5998' }} target="_blank" href="#">
                        <i className="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#0e76a8' }} target="_blank" href="#">
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-member">
                  <div className="team-member-image">
                    <img src="images/team/6.png" alt="Team Member Image" />
                  </div>

                  <div className="team-member-details">
                    <div className="team-member-name">Hafsa Shannon</div>

                    <span className="team-member-pos">Art Director</span>
                  </div>

                  <ul className="member-socials">
                    <li>
                      <a style={{ color: '#08a0e9' }} target="_blank" href="#">
                        <i className="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#3b5998' }} target="_blank" href="#">
                        <i className="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#0e76a8' }} target="_blank" href="#">
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="c-col-3 no-gap">
                <span className="pe-empty-space" style={{ height: '75px' }}></span>

                <div className="team-member">
                  <div className="team-member-image">
                    <img src="images/team/7.png" alt="Team Member Image" />
                  </div>

                  <div className="team-member-details">
                    <div className="team-member-name">Kean Devine</div>

                    <span className="team-member-pos">UX Designer</span>
                  </div>

                  <ul className="member-socials">
                    <li>
                      <a style={{ color: '#053eff' }} target="_blank" href="http://behance.net">
                        <i className="icon-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#ea4c89' }} target="_blank" href="#">
                        <i className="icon-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#3b5998' }} target="_blank" href="#">
                        <i className="icon-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-member">
                  <div className="team-member-image">
                    <img src="images/team/9.png" alt="Team Member Image" />
                  </div>

                  <div className="team-member-details">
                    <div className="team-member-name">Valentino Woodard</div>

                    <span className="team-member-pos">UI Designer</span>
                  </div>

                  <ul className="member-socials">
                    <li>
                      <a style={{ color: '#08a0e9' }} target="_blank" href="#">
                        <i className="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#0e76a8' }} target="_blank" href="#">
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="c-col-3 no-gap">
                <div className="team-member">
                  <div className="team-member-image">
                    <img src="images/team/1.png" alt="Team Member Image" />
                  </div>

                  <div className="team-member-details">
                    <div className="team-member-name">Manveer Pratt</div>

                    <span className="team-member-pos">Creative Director</span>
                  </div>

                  <ul className="member-socials">
                    <li>
                      <a style={{ color: '#053eff' }} target="_blank" href="http://behance.net">
                        <i className="icon-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#ea4c89' }} target="_blank" href="#">
                        <i className="icon-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#0e76a8' }} target="_blank" href="#">
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-member">
                  <div className="team-member-image">
                    <img src="images/team/10.png" alt="Team Member Image" />
                  </div>

                  <div className="team-member-details">
                    <div className="team-member-name">Donovan Ingram</div>

                    <span className="team-member-pos">Back-end Developer</span>
                  </div>

                  <ul className="member-socials">
                    <li>
                      <a style={{ color: '#053eff' }} target="_blank" href="http://behance.net">
                        <i className="icon-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#08a0e9' }} target="_blank" href="#">
                        <i className="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#0e76a8' }} target="_blank" href="#">
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="c-col-3 no-gap">
                <span className="pe-empty-space" style={{ height: '120px' }}></span>
                <div className="team-member">
                  <div className="team-member-image">
                    <img src="images/team/3.png" alt="Team Member Image" />
                  </div>

                  <div className="team-member-details">
                    <div className="team-member-name">Romario Turnbull</div>

                    <span className="team-member-pos">Front-end Developer</span>
                  </div>

                  <ul className="member-socials">
                    <li>
                      <a style={{ color: '#053eff' }} target="_blank" href="http://behance.net">
                        <i className="icon-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#ea4c89' }} target="_blank" href="#">
                        <i className="icon-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#0e76a8' }} target="_blank" href="#">
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="team-member">
                  <div className="team-member-image">
                    <img src="images/team/4.png" alt="Team Member Image" />
                  </div>

                  <div className="team-member-details">
                    <div className="team-member-name">Macie Day</div>

                    <span className="team-member-pos">Head Officer</span>
                  </div>

                  <ul className="member-socials">
                    <li>
                      <a style={{ color: '#053eff' }} target="_blank" href="http://behance.net">
                        <i className="icon-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#ea4c89' }} target="_blank" href="#">
                        <i className="icon-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a style={{ color: '#08a0e9' }} target="_blank" href="#">
                        <i className="icon-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="wrapper-small">
              <div className="c-col-12 align-center">
                <div className="caption has-animation skew-up">WHAT WE DID BEFORE</div>
                <h1 data-delay="0.2" className="big-title has-animation skew-up">
                  <a href="works.html" className="underline">
                    Works
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <footer className="site-footer">
          <div className="wrapper">
            <div className="c-col-12">
              <h1 className="thin" style={{ margin: 0 }}>
                Do you have a project or an idea?
                <br />
                <a className="underline" href="#">
                  hello@pethemes.com
                </a>
              </h1>
            </div>
          </div>

          <div style={{ marginBottom: '75px' }} className="wrapper-full">
            <div className="c-col-6 hide-mobile"></div>

            <div className="c-col-3 no-gap">
              <div className="caption">VISIT</div>
              <h5>
                32 Avenue of the Americas
                <br />
                New York, NY 10013
                <br />
                United States
              </h5>
            </div>

            <div className="c-col-3 no-gap">
              <div className="caption">FOLLOW</div>

              <ul className="footer-list">
                <li>
                  <a href="#" className="underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Behance
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '0' }} className="wrapper">
            <div className="c-col-6">
              <ul className="footer-menu ">
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Purchase</a>
                </li>
              </ul>
            </div>

            <div className="c-col-6 align-right">
              <p className="copyright-text">Pe Themes - CYGNI®, inc 20 - 20©</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Header
