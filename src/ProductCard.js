import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import classes from "./ProductCard.module.css";


const ProductCard = (props) => {

  const {id, title, category, price, description, image, rating} = props

  console.log(rating);

  return (

    <Card className={classes.productCard} style={{ width: '18rem', margin: "1rem" }}>
      <Card.Header><font color="grey">Price:</font> <b>{price}</b> €</Card.Header>
      <Card.Img variant="top" style={{ padding: "1rem" }} src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{category}</ListGroup.Item>
        <ListGroup.Item>Rating: {rating.rate}</ListGroup.Item>
        <ListGroup.Item>ID: {id}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ProductCard;