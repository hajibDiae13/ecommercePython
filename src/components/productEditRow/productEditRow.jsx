import React from 'react'
import './productEditRow.css'



function ProductEditRow(props) {


  return (
    <div class="ProductEditRow">
      <div class="ProductEditRow-image" style={{ backgroundImage: `url(${props.image})`, backgroundColor: `${props.color}` }}></div>
      <p class="ProductEditRow-name">{props.name}</p>
      <div class="ProductEditRow-stock">
      {props.units} units
      </div>
      <div class="ProductEditRow-options">
      <button class="ProductEditRow-options-delete">Delete</button>
      <button class="ProductEditRow-options-edit">Edit stock</button>
      <input></input>
      </div>

      <p class="ProductEditRow-price"><span class="ProductEditRow-green">{props.price}</span> {props.prefix}</p>
    </div>
  )
}

export default ProductEditRow
