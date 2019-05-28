// Theirs
import React from 'react'
import "purecss/build/pure-min.css"
import "purecss/build/grids-responsive.css"

// Mine
import "./header.scss"
import Logo from "./logo"
import Nav from "./nav"

const Header = () => (
	<header className='pure-g'>
		<Logo />
		<Nav />
	</header>
)

export default Header
