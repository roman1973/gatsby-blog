import React, { Component } from 'react'
import { navigate } from 'gatsby'

/**
 * Logo component
 **/

class Logo extends Component {
  redirectHandler = event => {
    event.preventDefault()

    if (window.location.pathname === '/') {
      let position = window.pageYOffset
      const interval = setInterval(() => {
        window.scrollTo(0, position < 50 ? 0 : position)
        position -= 50
        if (position < 0) clearInterval(interval)
      }, 10)
    } else {
      navigate('/')
    }
  }

  render () {
    return (
      <div
        className="logo"
        onClick={this.redirectHandler}>
        <img
          src={this.props.img}
          alt="website logo"/>
      </div>
    )
  }
}

export default Logo
