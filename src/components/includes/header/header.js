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
            setTimeout(() => {
                toggleSiteNavigation(true)
            }, 150)
            setTimeout(() => {
                toggleMenuItems(true)
            }, 200)
            setTimeout(() => {
                toggleSocialItems(true)
            }, 300)
            setTimeout(() => {
                toggleSocialItems(true)
            }, 500)
        } else {
            setTimeout(() => {
                toggleSiteNavigation(false)
                toggleLightNav(false)
            }, 380)
            toggleMenuItems(false)
            toggleSocialItems(false)
        }
    }, [onMenuClick])

    function onHovering(index) {
        const newMenuState = defaultMenuHover.map((v) => false)
        newMenuState[index] = true
        setDefaultMenuHover(() => newMenuState)
    }

    return (
        <header
            className={cn('site-header light', {
                'light-nav-active': lightNav,
                // "dark-nav-active": darkNav,
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
                                href="works.html"
                                data-hover="Training"
                                className={cn({ 'menu-item-comes': menuItems })}
                            >
                                Training
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
                                        hello@aerosailor.com hello@aerosailor.com
                                        hello@aerosailor.com hello@aerosailor.com
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
    )
}

export default Header
