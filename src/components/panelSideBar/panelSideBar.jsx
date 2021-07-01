import React from 'react'
import './panelSideBar.css'
import FormTitle from './../formTitle/formTitle'
import DashboardUser from './../dashboardUser/dashboardUser'
import PanelSectionButton from './../panelSectionButton/panelSectionButton'
import userPic from './../dashboardUser/userAvatar.jpg'
import { faCalendarCheck,faShoppingCart,faCartPlus, faUserShield} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function PanelSideBar(props) {


  function checkOverview() {
    if(window.location.pathname==="/overview")
    {
      return(<Link to="/overview"><PanelSectionButton id="selected" icon={faCalendarCheck} content="Overview"/></Link>)
    }
    else {
      return(<Link to="/overview"><PanelSectionButton icon={faCalendarCheck} content="Overview"/></Link>)
    }
  }

  function checkManageRoles() {
    if(window.location.pathname==="/manage_roles")
    {
      return(<Link to="/manage_roles"><PanelSectionButton id="selected" icon={faUserShield} content="Manage Roles"/></Link>)
    }
    else {
      return(<Link to="/manage_roles"><PanelSectionButton icon={faUserShield} content="Manage Roles"/></Link>)
    }
  }

  function checkAddProduct() {
    if(window.location.pathname==="/add_product")
    {
      return(<Link to="/add_product"><PanelSectionButton id="selected" icon={faCartPlus} content="Add Product"/></Link>)
    }
    else {
      return(<Link to="/add_product"><PanelSectionButton icon={faCartPlus} content="Add Product"/></Link>)
    }
  }

  function checkEditProduct() {
    if(window.location.pathname==="/edit_product")
    {
      return(<Link to="/edit_product"><PanelSectionButton id="selected" icon={faShoppingCart} content="Edit Products"/></Link>)
    }
    else {
      return(<Link to="/edit_product"><PanelSectionButton icon={faShoppingCart} content="Edit Products"/></Link>)
    }
  }
  return (
    <div class="PanelSideBar">
      <FormTitle content="Dashboard"/>
      <DashboardUser avatar={props.connected.image} name={props.connected.firstName+" "+props.connected.secondName} role={props.connected.role}/>
      {checkOverview()}
      {checkAddProduct()}
      {checkEditProduct()}
      {checkManageRoles()}
    </div>
  )
}

export default PanelSideBar
