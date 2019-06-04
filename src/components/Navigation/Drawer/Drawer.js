import React from 'react'
import { Link } from 'gatsby'

import classes from './Drawer.module.scss'
import MenuToggle from '../MenuToggle/MenuToggle'

/**
 * Drawer component
 **/

const Drawer = props => {
  const cls = [classes.Drawer]

  if (!props.isOpen) {
    cls.push(classes.Close)
  }

  return (
    <nav className={cls.join(' ')}>
      <MenuToggle
        onToggle={props.onClose}
        isOpen={props.isOpen} />
      <ul>
        <li
          onClick={props.onClose}>
          <Link
            activeClassName="active"
            to="/services/">
            Services
          </Link>
        </li>
        <li
          id="not-clickable-mobile"
          onClick={props.onClose}>
          <a>Industries</a>
        </li>
        <li
          id="not-clickable-mobile"
          onClick={props.onClose}>
          <a>Technologies</a>
        </li>
        <li
          onClick={props.onClose}>
          <Link
            activeClassName="active"
            to="/blog/">
            Blog
          </Link>
        </li>
        <li
          id="not-clickable-mobile"
          onClick={props.onClose}>
          <a>Contact us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Drawer
