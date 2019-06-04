import React from 'react'

import Logo from './UI/Logo/Logo'
import logoImg from '../assets/gatsby-icon.png'

const Footer = () => (
  <div className="footer">
    <div className="footer-wrapper">
      <div className="logo-wrapper-head">
        <Logo img={logoImg} />
      </div>
      <div className="copyright">
        <span>Copyright © 2019 FIRST. All rights reserved.</span>
      </div>
      <div className="logo-wrapper-back">
        <Logo img={logoImg} />
      </div>
    </div>
    <div className="scapeland">

    </div>
  </div>
)

export default Footer
