import React from 'react'

import classes from './MenuToggle.module.scss'

/**
 * Menu-Toggle component
 **/

const MenuToggle = props => {
  return (
    <figure
      className={classes.MenuToggle}
      onClick={props.onToggle}
    >
      {!props.isOpen
        ? <div className={classes.Bars}>
          <div className={classes.MenuToggleRectangle}/>
          <div className={classes.MenuToggleRectangle}/>
          <div className={classes.MenuToggleRectangle}/>
        </div>
        : <div className={classes.Times}>
          <div className={classes.MenuToggleRectangle}/>
          <div className={classes.MenuToggleRectangle}/>
        </div>
      }
    </figure>
  )
}

export default MenuToggle
