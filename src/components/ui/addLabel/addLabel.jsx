import React from 'react'
import './addLabel.css'
import Input from './../../input/input'
import {faSignOutAlt,faSignature,faTag,faInfo,faDollarSign,faFillDrip} from '@fortawesome/free-solid-svg-icons'
import FormTitle from './../../formTitle/formTitle'
import FormButton from './../../formButton/formButton'
function AddLabel(props) {


  function updatePreview(){
    let textColor = document.querySelector('#Label-textColor');
    let backColor = document.querySelector('#Label-backColor');
    let name = document.querySelector('#Label-name');
    let labelPreview = document.querySelector('.AddLabel-labelPreview');

    if(name.value !== "")
    {
      labelPreview.innerText = name.value;
    }
    else {
      labelPreview.innerText = "Label name"
    }

    labelPreview.style.backgroundColor = backColor.value;
    labelPreview.style.color = textColor.value;
  }
  return (
    <div class="AddLabel">
    <FormTitle content="Add Label"/>
    <div class="AddLabel-firstRow">

    <Input id="Label-textColor" type="text" placeholder="Label text color (#000000)" icon={faSignature} onChange={updatePreview}/>
    <Input id="Label-backColor" type="text" placeholder="Label back color (#000000)" icon={faFillDrip} onChange={updatePreview}/>
    </div>
    <Input id="Label-name" type="text" placeholder="Label name" icon={faFillDrip} onChange={updatePreview}/>
    <center>
    <div class="AddLabel-labelPreview">LabelName</div>
    <FormButton content="ADD"/>
    </center>
    </div>
  )
}

export default AddLabel
