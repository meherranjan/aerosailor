import React from 'react'
import socialList from './social'
import './footer.scss'

const Copyright = () => <section className='copyright'>
  <div>© 2015 – 2019 Aerosailor</div>
</section>

const AboutMe =
  () =>
    <section className='about-me'>
      <h2>Hello</h2>
      <h5>
        I am Meher.
        I work with <a href="https://www.credit-suisse.com/">Credit Suisse</a> in Pune, India.
      </h5>
      <h5>
        I build high performance apps using React, Redux, GraphQL & RamdaJS.
      </h5>
    </section>

const ConnectOnSocial = () => <section className='connect-on-social'>
  <h5>You can find me on</h5>
  <ul className="clearfix">
    {
      socialList.map(obj =>
        <li>
          <a href={obj.url} target="_blank" rel="noopener noreferrer">
            <img src={obj.icon} alt={obj.alt} />
          </a>
        </li>
      )
    }
  </ul>
</section>

const Footer =
  () =>
    <footer className="footer-container">
      <AboutMe />
      <ConnectOnSocial />
      <Copyright />
    </footer>

export default Footer
