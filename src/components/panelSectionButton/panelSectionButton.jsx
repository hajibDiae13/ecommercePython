import React from 'react'
import './panelSectionButton.css'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function panelSectionButton(props) {


  return (
    <div class="PanelSectionButton" id={props.id} >
      <div class="PanelSectionButton-icon rel">
        <div class="center">
          <FontAwesomeIcon icon={props.icon} />
        </div>
      </div>
      <div class="PanelSectionButton-content rel">
        <div class="right">{props.content}</div>
      </div>
      <div class="PanelSectionButton-arrow rel">
        <div class="center arrow"><FontAwesomeIcon icon={faArrowRight} /></div>
      </div>
    </div>
  )
}

export default panelSectionButton
