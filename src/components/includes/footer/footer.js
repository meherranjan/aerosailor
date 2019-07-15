import React from 'react'
import socialList from './social'
import './footer.scss'

// const Copyright = () => <section className='copyright'></section>
const AboutMe =
  () =>
    <section className='about-me'>
      <h2>Hello</h2>
      <h5>
        I am Meher.
        I work with <a href="https://www.credit-suisse.com/">Credit Suisse</a> in Pune, India.
        I am passionate about JavaScript, React, Elm & GraphQL.
      </h5>
      <h5>
        I build high performace apps with a spoonful of aesthetics.
      </h5>
      <h5>
        You can find me on &nbsp;  —
      </h5>
    </section>

const ConnectOnSocial = () => <section className='connect-on-social'>
  <ul className="clearfix">
    {
      socialList.map(obj =>
        <li>
          <a href={obj.url} target="_blank">
            <img src={obj.icon} />
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
    </footer>

export default Footer
