import React from 'react'
import './tableElement.css'



function TableElement(props) {


  function ckeckSmall(small)
  {
    if(small === true)
    {
      return (<span class="TableElement-small">Units sold: {props.sold}</span>)
    }
    else
    {
      return (<span></span>)
    }
  }
  return (
    <div class="TableElement">
      <div class="TableElement-image" style={{ backgroundImage: `url(${props.image})`, backgroundColor: `${props.color}` }}></div>
      <p class="TableElement-name">{props.name}<br/>{ckeckSmall(props.small)}</p>
      <p class="TableElement-price"><span class="TableElement-green">{props.price}</span> {props.prefix}</p>
    </div>
  )
}

export default TableElement
