import React from 'react'
import Background from './components/background/background'
import WhiteContainer from './components/whiteContainer/whiteContainer'
import FormTitle from './components/formTitle/formTitle'
import Input from './components/input/input'
import FormButton from './components/formButton/formButton'
import FormCheckBox from './components/formCheckBox/formCheckBox'
import { faKey,faAt} from '@fortawesome/free-solid-svg-icons'

function AdminLogin() {
  return (
    <div class="AdminLogin">
    <Background/>
    <WhiteContainer>
      <FormTitle content='ADMIN LOGIN'/>
      <Input icon={faAt} placeholder="Username" id="username" type="text"/>
      <Input icon={faKey} placeholder="Password" id="password" type="password"/>
      <FormCheckBox content="Stay connected"/>
      <FormButton content="LOGIN"/>

    </WhiteContainer>
    </div>

  )
}

export default AdminLogin
