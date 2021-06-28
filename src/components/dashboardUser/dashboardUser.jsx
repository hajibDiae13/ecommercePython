import React from 'react'
import './dashboardUser.css'

import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function DashboardUser(props) {
  return (
    <div class="DashboardUser">
      <div class="DashboardUser-image"><img src={props.avatar}></img></div>
      <div class="DashboardUser-userInfo">
      <p class="DashboardUser-userInfo-name">{props.name}</p><p class="DashboardUser-userInfo-role">{props.role}</p>
      </div>
      <div class="DashboardUser-logout"><button class=""><FontAwesomeIcon icon={faSignOutAlt} /></button></div>

    </div>
  )
}

export default DashboardUser
