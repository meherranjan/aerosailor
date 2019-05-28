import React from 'react'
import aerosailorsvg from '../../../../static/logo.svg'

const Logo = () => (
	<section className="logo-container pure-u-1-4">
		<h1 className="masthead-title text-center">
			<a className="brand" href="/" title="Aerosailor">
				<img src={aerosailorsvg} alt="Aerosailor Logo" />
			</a>
		</h1>
	</section>
)

export default Logo