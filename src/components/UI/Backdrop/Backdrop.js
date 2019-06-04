import React, { Component } from 'react'
import classes from './Backdrop.module.scss'

/**
 * Backdrop component
 **/

class Backdrop extends Component {
  removeScroll = e => e.preventDefault()

  componentDidMount () {
    document.body.style.overflow = 'hidden'
    document.addEventListener('touchmove', this.removeScroll, { passive: false })
  }

  componentWillUnmount () {
    document.removeEventListener('touchmove', this.removeScroll, { passive: false })
    document.body.style.overflow = 'auto'
  }

  render () {
    return (
      <div className={classes.Backdrop} onClick={this.props.onClick} />
    )
  }
}

export default Backdrop
