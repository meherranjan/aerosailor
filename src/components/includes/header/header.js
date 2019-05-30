import React from 'react'
import { useSiteMetadata } from '../../../hooks/use-site-metadata.js'

import "./header.scss"
import Logo from "./logo"
import Nav from "./nav"

const Header = () => {
	const { title } = useSiteMetadata()
	return <header>
		<h1>{
				title
		}</h1>
		<Logo />
		<Nav />
	</header>
}

export default Header