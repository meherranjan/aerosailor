import React, { useState } from 'react'
import Logo from "./logo"
import cn from 'classnames'

import './nav.scss'

const NavigationMenu =
	() => {
		const [isOpen, setIsOpen] = useState(false);
		const toggle = () => setIsOpen(!isOpen)
		const toggleClass = cn('header', { 'menu-opened': isOpen })

		return <div className="navigation menu cell small-12">
			<nav>
				<div className={toggleClass}>
					<div class="burger-container" onClick={toggle}>
						<div id="burger">
							<div class="bar topBar"></div>
							<div class="bar btmBar"></div>
						</div>
					</div>

					<Logo />

					<ul class="menu">
						<li class="menu-item"><a href="#">Home</a></li>
						<li class="menu-item"><a href="#">Blog</a></li>
						<li class="menu-item"><a href="#">Training</a></li>
						<li class="menu-item"><a href="#">Tutorials</a></li>
					</ul>
				</div>
			</nav>
		</div>
	}

export default NavigationMenu