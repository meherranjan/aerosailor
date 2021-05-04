import React from 'react'
import socialList from './social'
import './footer.scss'

const Footer = () => (
  <footer className="site-footer layout-dark">
    <span className="footer-ov"></span>
    <span className="footer-ov"></span>
    <span className="footer-ov"></span>
    <span className="footer-ov"></span>

    <div className="wrapper">
      <div className="c-col-12">
        <h1 className="thin">
          Do you have a project or an idea?
          <br />
          <a className="underline" href="#">
          hello@aerosailor.com 
          </a>
        </h1>
      </div>
    </div>

    <div className="wrapper-full">
      <div className="c-col-6 hide-mobile"></div>

      <div className="c-col-3 no-gap">
        {/* <div className="caption">PROFILE PICTURE</div> */}
        {/* <h5>
          32 Avenue of the Americas
          <br />
          New York, NY 10013
          <br />
          United States
        </h5> */}
      </div>

      <div className="c-col-3 no-gap">
        <div className="caption">FOLLOW</div>

        <ul className="footer-list">
          <li>
            <a href="#" className="underline">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="underline">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="underline">
              Udemy
            </a>
          </li>
          <li>
            <a href="#" className="underline">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="wrapper">
      <div className="c-col-6">
        <ul className="footer-menu ">
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>

      <div className="c-col-6 align-right">
        <p className="copyright-text">Aerosailor® 2021 ©</p>
      </div>
    </div>
  </footer>
)

export default Footer
