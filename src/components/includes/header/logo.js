import React from 'react'
import aerosailorsvg from '../../../../static/logo.svg'

const Logo =
	() =>
		<div className="logo-container">
			<h1 className="masthead-title">
				<a className="brand" href="/" title="Aerosailor">
					<img src={aerosailorsvg} alt="Aerosailor Logo" />
				</a>
			</h1>
		</div>

export default Logo