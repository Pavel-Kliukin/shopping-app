import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./ProductsList.module.css";
import CustomNavbar from "./CustomNavbar";

const api = "https://fakestoreapi.com/products"
const {data: products} = await axios.get(api)  // we get an object and then get only the "data" part from that object

const ProductsList = () => {
  
  console.log(products);

  return (

    <div className={classes.productsList}>
      <CustomNavbar />
      <div className={classes.products}>
        {Array.isArray(products) && products.map((product) => (
          <ProductCard key={product?.id} {...product} /> //{product?.id} We need "?" in case if we don't have any products yet, it will not brake the code
        ))}
      </div>
    </div>

  )
}

export default ProductsList;