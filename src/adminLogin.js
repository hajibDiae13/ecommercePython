import {React,useState, useEffect} from 'react'
import Background from './components/background/background'
import WhiteContainer from './components/whiteContainer/whiteContainer'
import FormTitle from './components/formTitle/formTitle'
import Input from './components/input/input'
import FormButton from './components/formButton/formButton'
import FormCheckBox from './components/formCheckBox/formCheckBox'
import { faKey,faAt} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function AdminLogin() {

  //axios.get('127.0.0.1:8000/api/AdminUser')

  // Dummy Url.
  const url = 'http://127.0.0.1:8000/api/AdminUser/'
  const axiosTest = axios.get
  const [testState, setTest] = useState('');
  console.log(testState);
  if(testState == '')
  {
    axiosTest(url).then(snapshot => setTest(snapshot.data))
    console.log(testState);
  }


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
