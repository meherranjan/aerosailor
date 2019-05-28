import React from 'react'
import './nav.scss'

const Nav =
	() =>
	<section className="navigation menu pure-u-3-4">
		<nav>
			<ul className="clearfix vertical-align-two hover-saber">
				<li className="active">
					<a href="/" data-cont="Home">Home</a>
				</li>
				<li>
					<a href="/" data-cont="Blog">Blog</a>
				</li>
				<li>
					<a href="/" data-cont="Labs">Labs</a>
				</li>
				<li>
					<a href="/" data-cont="Tutorials">Tutorials</a>
				</li>
			</ul>
		</nav>
	</section>

export default Nav