import React from 'react'
import './select.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Select(props) {


  console.log(props.options);
  function addOptions(op){
    var options = []
    console.log(op);
    if(op !== undefined){
      console.log(op.lenght);
    for(let i=0;i<op.length;i++)
    {
      console.log(op);
      options.push(<option value={op[i]}>{op[i]}</option>)
    }

    return options
  }
  }
  return (
    <div class="Select">
      <FontAwesomeIcon icon={props.icon} />
      <select id={props.id} type={props.type} placeholder={props.placeholder} onChange={props.onChange}>
        {addOptions(props.options)}
      </select>
    </div>
  )
}

export default Select
