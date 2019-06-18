import React, { useState } from 'react'
import Logo from "./logo"
import cn from 'classnames'

import './nav.scss'
const menuItems = ['Home', 'Blog', 'Training', 'Tutorials', 'Contact']

const NavigationMenu =
	() => {
		const [isOpen, setIsOpen] = useState(false);
		const toggle = () => setIsOpen(!isOpen)
		const toggleClass = cn('header', { 'menu-opened': isOpen })

		return <div className="navigation menu cell small-12">
			<nav>
				<div className={toggleClass}>
					<div className="burger-container" onClick={toggle}>
						<div id="burger">
							<div className="bar topBar"></div>
							<div className="bar btmBar"></div>
						</div>
					</div>

					<Logo />

					<ul className="menu">
						{ menuItems.map((item, key) => <li key={key} className="menu-item"><a href={item}>{item}</a></li>) }
					</ul>
				</div>
			</nav>
		</div>
	}

export default NavigationMenu