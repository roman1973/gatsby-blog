import React from 'react'
import classes from './Modal.module.scss'

/**
 * Modal component
 **/

const Modal = props => {
  const cls = [classes.Modal]
  if (props.modalOpen) {
    cls.push(classes.Open)
  }
  if (props.modalStatus) {
    cls.push(classes.Success)
  } else {
    cls.push(classes.Error)
  }
  return (
    <div
      className={cls.join(' ')}
    >
      <span>
        {props.modalMessage}
      </span>
      <button type="button" onClick={props.onClick}>OK</button>
    </div>
  )
}

export default Modal
