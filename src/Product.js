import React from 'react';
import classes from "./Product.module.css";


const Product = (props) => {

  const {id, title, category, price, description, image, rating} = props

  return (
    <div className={classes.productCard}>
      <img className={classes.productImage} src={image} alt={title}/>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
    </div>
  );
};

export default Product;