import React from 'react'
import './formCheckBox.css'
function FormCheckBox(props) {
  return (
    <div>
      <label class="container">{props.content}
      <input type="checkbox"></input>
      <span class="checkmark"></span>
      </label>
    </div>

  )
}

export default FormCheckBox
