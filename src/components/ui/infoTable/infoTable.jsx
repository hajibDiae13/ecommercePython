import React from 'react'
import './infoTable.css'
import FormTitle from './../../formTitle/formTitle'
import TableElement from './../../tableElement/tableElement'
import pic0 from './images/0.jpg'
import pic1 from './images/1.jpg'
import pic2 from './images/2.jpg'
function InfoTable(props) {


  function buildTable(prod)
  {
    let listPr = []
    for(let i=0;i<prod.length;i++)
    {

      listPr.push(<TableElement name={prod.[i].name} price={prod.[i].price} sold={prod.[i].sold} image={prod.[i].image} small={true} prefix="MAD"/>)
    }
    return listPr
  }

  return (
    <div class="InfoTable">
      <FormTitle content={props.title}/>
      {buildTable(props.products)}

    </div>
  )
}

export default InfoTable
