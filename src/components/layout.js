import React from 'react'
import PropTypes from 'prop-types'
// add fontawesome library
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Navigation from './Navigation/Navigation'
import Footer from './footer'

import '../styles/index.scss'

library.add(faArrowLeft, faArrowRight, fab)

const Layout = ({ children }) => (
  <React.Fragment>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
