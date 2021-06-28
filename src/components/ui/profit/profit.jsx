import React from 'react'
import './profit.css'
function Profit(props) {



  function checkPoucentageSign()
  {
    if(props.pourcentage>=0)
    return (<span class="prc-positive">{" "+props.pourcentage+"% "}</span>)
    else
    return (<span class="prc-negative">{" "+props.pourcentage+"% "}</span>)
  }
  return (
    <div class="Profit">
    <div class="abs">
    <center>
      <p class="Profit-head">Your profit yesterday was</p><br/>
      <p class="Profit-value">{props.value + " MAD"}</p><br/>
      <p class="Profit-compare">thats
      {checkPoucentageSign()}
      compared to the day before</p>
    </center>
    </div>
    </div>
  )
}

export default Profit
