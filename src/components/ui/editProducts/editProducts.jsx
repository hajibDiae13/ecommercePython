import React, {useState} from 'react'
import './editProducts.css'
import FormTitle from './../../formTitle/formTitle'
import ProductEditRow from './../../productEditRow/productEditRow'
import Input from './../../input/input'
import pic0 from './../infoTable/images/0.jpg'
import pic1 from './../infoTable/images/1.jpg'
import pic2 from './../infoTable/images/2.jpg'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
function EditProducts(props) {

  const [products , setProducts] = useState(props.products);

  function buildProducts(prod)
  {
    let prodList = []

    for (var i = 0; i < prod.length; i++) {
      prodList.push(<ProductEditRow image={prod[i].image} units={prod[i].inStock} name={prod[i].name} price={prod[i].price} prefix="MAD"/>)
    }

    return prodList
  }

  function update(e)
  {
    let search = e.target.value.toLowerCase();
    let prods = props.products.map((item) => {return {  image : item.image,name : item.name.toLowerCase(),price : item.price,inStock :  item.inStock,}})
    prods = prods.filter((item) => {return item.name.includes(search)})
    setProducts(prods)
  }


  return (
    <div class="EditProducts">
    <div class="InfoTable">
      <FormTitle content="Edit products"/>
      <Input icon={faSearch} placeholder="Search product" onChange ={update}/>
      {buildProducts(products)}
    </div>
    </div>
  )
}

export default EditProducts
