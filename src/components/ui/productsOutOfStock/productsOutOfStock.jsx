import React from 'react'
import './productsOutOfStock.css'
import {faBox ,faExclamationTriangle, faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ProductsOutOfStock(props) {


  function checkContent() {
    if(props.content==0)
    {
      return (<p class="ProductsOutOfStock-text-value good"><FontAwesomeIcon icon={faCheckSquare}/>{" "+props.content }</p>)
    }
    else {
      return (<p class="ProductsOutOfStock-text-value bad"><FontAwesomeIcon icon={faExclamationTriangle}/>{" "+props.content }</p>)
    }
  }

  return (
    <div class="ProductsOutOfStock">
      <div class="ProductsOutOfStock-text">
      <div class="abs">
      <p class="ProductsOutOfStock-text-text">Products out of stock</p><br/>
      {checkContent()}
      </div>
      </div>
      <div class="ProductsOutOfStock-icon">
      <div class="abs">
      <FontAwesomeIcon icon={faBox}/>
      </div>
      </div>
    </div>
  )
}

export default ProductsOutOfStock
