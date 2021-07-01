import React from 'react'
import './labelTable.css'
import FormTitle from './../../formTitle/formTitle'
import TableElement from './../../tableElement/tableElement'
function LabelTable(props) {


function buildLabels(lab)
{
  let labelList = []
  for (var i = 0; i < lab.length; i++) {
    labelList.push(<TableElement name={lab[i].name} price={lab[i].productCount} prefix="Products" color={lab[i].color}/>)
  }
  return labelList;
}

  return (
    <div class="LabelTable">
    <div class="InfoTable">
      <FormTitle content="Label list"/>
      {buildLabels(props.labels)}
    </div>
    </div>
  )
}

export default LabelTable
