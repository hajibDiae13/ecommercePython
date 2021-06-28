import React from 'react'
import './productsInStore.css'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ProductsInStore(props) {
  return (
    <div class="ProductsInStore">
    <div class="ProductsInStore-text">
    <div class="abs">
    <p class="ProductsInStore-text-text">Products in store</p><br/>
    <p class="ProductsInStore-text-value">{props.content}</p>
    </div>
    </div>
    <div class="ProductsInStore-icon">
    <div class="abs">
    <FontAwesomeIcon icon={faShoppingCart}/>
    </div>
    </div>
    </div>
  )
}

export default ProductsInStore
