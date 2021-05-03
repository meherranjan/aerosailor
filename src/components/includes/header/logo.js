import React from 'react'
import aerosailorIcon from '../../../../static/logo-icon.svg'
import aerosailorText from '../../../../static/logo-text.svg'

const Logo = () => (
    <div className="logo-container">
        <h1 className="masthead-title">
            <a className="brand" href="/" title="Aerosailor">
                <img className="for-desktop" src={aerosailorIcon} alt="Aerosailor Logo" />
                <img className="for-mobile" src={aerosailorText} alt="Aerosailor Logo" />
            </a>
        </h1>
    </div>
)

export default Logo
