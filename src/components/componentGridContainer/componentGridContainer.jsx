import React from 'react'
import './componentGridContainer.css'

function ComponentGridContainer(props) {
  return (
    <div class="ComponentGridContainer">
      <div class={props.grid_template}>
        {props.children}
      </div>
    </div>
  )
}

export default ComponentGridContainer
