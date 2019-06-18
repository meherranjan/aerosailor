import React from 'react'
// import { useSiteMetadata } from '../../../hooks/use-site-metadata.js'

import "./header.scss"
import NavigationMenu from "./nav"

const Header = () => {
	// const { title } = useSiteMetadata()
	return <header className='grid-container'>
		<div className="grid-x">
			<NavigationMenu />
		</div>
	</header>
}

export default Header