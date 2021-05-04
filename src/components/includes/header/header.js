import React, { useState, useEffect } from 'react'
import './header.scss'
import cn from 'classnames'
import lightLogo from '../../../../static/icons/icon-512x512.png'
import darkLogo from '../../../../static/icons/icon-512x512-invert.png'
import { gs } from './util.js'
import Footer from '../footer/footer'

const Header = () => {
  const [defaultMenuHover, setDefaultMenuHover] = useState([true])
  const [onMenuClick, toggleMenuClick] = useState(false)
  const [siteNavigation, toggleSiteNavigation] = useState(false)
  const [menuItems, toggleMenuItems] = useState(true)
  const [socialItems, toggleSocialItems] = useState(true)
  const [lightNav, toggleLightNav] = useState(false)
  const [mainClass, setMainClass] = useState('')

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

  useEffect(() => {
    setTimeout(() => {
      setMainClass('loaded')
    }, 100)
  }, [])

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
      <div id="page-content" class="page-content">
        <div className="section">
          <div className="wrapper-small">
            <div className="c-col-12">
              <div className="text-wrapper">
                <h1 className="big-title has-animation skew-up is-inview" data-scroll="true">
                  Hello!
                  <br />
                  I am 
                  Meher.
                </h1>
              </div>
            </div>
            <div className="c-col-4 hide-mobile"></div>
            <div className="c-col-8">
              <div className="text-wrapper">
                <p
                  data-delay="0.4"
                  className="big-p has-animation lines-up is-inview"
                  data-scroll="true"
                  style={gs('transition-delay: 0.4s;')}
                >
                  <div style={gs('line-index:0;')}>
                    <span className="split-line" style={gs('transition-delay: 0.4s;')}>
                      This vendor is incompetent product launch yet waste of
                    </span>
                  </div>
                  <div style={gs('line-index:1;')}>
                    <span className="split-line" style={gs('transition-delay: 0.533333s;')}>
                      resources message the initiative diversify kpis high touch client.
                    </span>
                  </div>
                  <div style={gs('line-index:2;')}>
                    <span className="split-line" style={gs('transition-delay: 0.666667s;')}>
                      Herding cats commitment to the cause yet i also believe it's
                    </span>
                  </div>
                  <div style={gs('line-index:3;')}>
                    <span className="split-line" style={gs('transition-delay: 0.8s;')}>
                      important for every member to be involved and invested in our
                    </span>
                  </div>
                  <div style={gs('line-index:4;')}>
                    <span className="split-line" style={gs('transition-delay: 0.933333s;')}>
                      company..
                    </span>
                  </div>
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Header
