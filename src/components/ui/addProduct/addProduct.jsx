import React from 'react'
import './addProduct.css'
import Input from './../../input/input'
import {faSignOutAlt,faSignature,faTag,faInfo,faDollarSign,faImage} from '@fortawesome/free-solid-svg-icons'
import FormTitle from './../../formTitle/formTitle'
import FormButton from './../../formButton/formButton'
function AddProduct(props) {
  return (
    <div class="AddProduct">
    <FormTitle content="Add Product"/>
    <div class="AddProduct-firstRow">
    <Input id="product-name" type="text" placeholder="Product name" icon={faSignature}/>
    <Input id="product-price" type="text" placeholder="Product price" icon={faDollarSign}/>
    </div>
    <div class="AddProduct-secondRow">
    <Input id="product-price" type="text" placeholder="Product description" icon={faInfo}/>
    </div>
    <div class="AddProduct-firstRow">
    <Input id="product-name" type="text" placeholder="Product label" icon={faTag}/>
    <Input id="product-picture" type="text" placeholder="Product picture" icon={faImage}/>
    </div>
    <center>
    <FormButton content="ADD"/>
    </center>
    </div>
  )
}

export default AddProduct
