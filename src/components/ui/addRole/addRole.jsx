import React from 'react'
import './addRole.css'
import Input from './../../input/input'
import Select from './../../select/select'
import {faSignOutAlt,faSignature,faUserShield,faInfo,faDollarSign,faImage, faKey, faUser} from '@fortawesome/free-solid-svg-icons'
import FormTitle from './../../formTitle/formTitle'
import FormButton from './../../formButton/formButton'

function AddRole(props) {
  return (
    <div class="AddRole">
    <FormTitle content="Add Role"/>
    <div class="AddRole-firstRow">
    <Input id="product-name" type="text" placeholder="first name" icon={faSignature}/>
    <Input id="user" type="text" placeholder="Second name" icon={faSignature}/>
    </div>
    <div class="AddRole-firstRow">
    <Input id="product-name" type="text" placeholder="Username" icon={faUser}/>
    <Input id="product-picture" type="text" placeholder="Password" icon={faKey}/>
    </div>
    <div class="AddRole-firstRow">
    <Select id="product-name" type="text" placeholder="Role" icon={faUserShield}  options={["Administrator","Product Editor","Data analyst"]}/>
    <Input id="product-picture" type="text" placeholder="picture" icon={faImage}/>
    </div>
    <center>
    <FormButton content="ADD"/>
    </center>
    </div>
  )
}

export default AddRole
