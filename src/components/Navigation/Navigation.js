import React, { Component } from 'react'

import { Link } from 'gatsby'
import MenuToggle from './MenuToggle/MenuToggle'
import Drawer from './Drawer/Drawer'
import Backdrop from '../UI/Backdrop/Backdrop'
import Logo from '../UI/Logo/Logo'
import logo from '../../assets/gatsby-icon.png'

class Navigation extends Component {
  state = {
    menu: false,
    prevScrollPos: null,
    visible: true
  }

  // Adds an event listener when the component is mount.
  componentDidMount () {
    this.setState({ prevScrollPos: window.pageYOffset })
    window.addEventListener('scroll', this.scrollHandler)
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollHandler)
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  closeMenuHandler = () => {
    this.setState({
      menu: false
    })
  }

  // Hide or show the menu.
  scrollHandler = () => {
    const { prevScrollPos } = this.state

    const currentScrollPos = window.pageYOffset
    const visible = prevScrollPos > currentScrollPos || currentScrollPos <= 0

    this.setState({
      prevScrollPos: currentScrollPos,
      visible
    })
  };

  render () {
    const { visible } = this.state

    let cls = ['navigation']
    if (!visible) {
      cls.push('visible')
    }

    return (
      <React.Fragment>
        <div className={cls.join(' ')}>
          <div className="navigation-wrapper">
            <Logo img={logo}/>
            <ul>
              <li>
                <Link
                  activeClassName="active"
                  to="/services/">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  activeClassName="active"
                  to="/industries/">
                  Industries
                </Link>
              </li>
              <li id="not-clickable"><a>Technologies</a></li>
              <li>
                <Link
                  activeClassName="active"
                  to="/blog/">
                  Blog
                </Link>
              </li>
              <li id="not-clickable"><a>Contact us</a></li>
            </ul>
          </div>
          <MenuToggle
            onToggle={this.toggleMenuHandler}
            isOpen={this.state.menu}
          />
        </div>
        <Drawer
          isOpen={this.state.menu}
          onClose={this.closeMenuHandler}
        />
        { this.state.menu ? <Backdrop onClick={this.closeMenuHandler} /> : null }
      </React.Fragment>
    )
  }
}

export default Navigation
