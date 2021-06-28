import React from 'react'
import './panelContainer.css'
function PanelContainer(props) {
  return (
    <div class="PanelContainer">
    {props.children}
    </div>
  )
}

export default PanelContainer
