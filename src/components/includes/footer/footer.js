import React from 'react'
import linkedin from '../../../../static/social/linkedin.svg';
import fb from '../../../../static/social/facebook.svg';
import github from '../../../../static/social/github.svg';
import gmail from '../../../../static/social/gmail.svg';
import instagram from '../../../../static/social/instagram.svg';
import './footer.scss'

// const Copyright = () => <section className='copyright'></section>
// const TechStack = () => <section className='tech-stack'></section>

const socialList = [{
  icon: linkedin,
  url: 'https://in.linkedin.com/in/meherranjan'
},
{
  icon: github,
  url: 'https://github.com/meherranjan'
},
{
  icon: gmail,
  url: 'mailto:hmeherranjan@gmail.com'
},
{
  icon: instagram,
  url: 'https://instagram.com/meherranjan'
},
{
  icon: fb,
  url: 'https://facebook.com/meherranjan'
}]
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
      <ConnectOnSocial />
    </footer>

export default Footer
