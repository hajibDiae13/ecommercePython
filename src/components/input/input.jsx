import React from 'react'
import './input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Input(props) {
  return (
    <div class="Input">
      <FontAwesomeIcon icon={props.icon} />
      <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
    </div>
  )
}

export default Input
