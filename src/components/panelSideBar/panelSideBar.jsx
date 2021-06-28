import React from 'react'
import './panelSideBar.css'
import FormTitle from './../formTitle/formTitle'
import DashboardUser from './../dashboardUser/dashboardUser'
import PanelSectionButton from './../panelSectionButton/panelSectionButton'
import userPic from './../dashboardUser/userAvatar.jpg'
import { faArrowRight, faCalendarCheck,faShoppingCart,faCartPlus, faUserShield} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function PanelSideBar() {
  return (
    <div class="PanelSideBar">
      <FormTitle content="Dashboard"/>
      <DashboardUser avatar={userPic} name="Diae Hajib" role="Product editor"/>
      <PanelSectionButton id="selected" icon={faCalendarCheck} content="Overview"/>
      <PanelSectionButton icon={faCartPlus} content="Add Product"/>
      <PanelSectionButton icon={faShoppingCart} content="Edit Products"/>
      <PanelSectionButton icon={faUserShield} content="Manage Roles"/>
    </div>
  )
}

export default PanelSideBar
