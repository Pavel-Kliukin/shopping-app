import axios from "axios"
import Product from "./Product"
import classes from "./ProductsList.module.css";
import Card from 'react-bootstrap/Card'

const api = "https://fakestoreapi.com/products"
const {data: products} = await axios.get(api)  // we get an object and then get only the "data" part from that object

const ProductsList = () => {
  
  console.log(products);

  return (

    // this is my part of the code:

    <div className={classes.productsList}>
      {Array.isArray(products) && products.map((product) => (
        <Product key={product?.id} {...product} /> //{product?.id} We need "?" in case if we don't have any products yet, it will not brake the code
      ))}
    </div>

    // This is what Martin did:


  )
}

export default ProductsList;