import React, { useState } from 'react'
import { Link } from 'gatsby'
import Logo from './logo'
import cn from 'classnames'

import './nav.scss'

const NavigationMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const toggleClass = cn('header', { 'menu-opened': isOpen })

    return (
        <div className="navigation menu cell small-12">
            <nav>
                <div className={toggleClass}>
                    <div className="burger-container" onClick={toggle}>
                        <div id="burger">
                            <div className="bar topBar" />
                            <div className="bar btmBar" />
                        </div>
                    </div>
                    <Logo />
                    <ul className="menu">
                        <li className="menu-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className="menu-item">
                            <a href="/">Training</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Tutorials</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavigationMenu
