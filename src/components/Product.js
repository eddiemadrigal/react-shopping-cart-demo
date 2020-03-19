import React from 'react';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import '../index.css';

const Product = props => {
	return (
		<Card>
			<CardImg height="400px" src={props.product.image} alt={`${props.product.title} book`} />
			<CardBody>
				<CardTitle>{props.product.title}</CardTitle>
				<CardSubtitle>${props.product.price}</CardSubtitle>
				<CardText className="card-text-height">misc text goes here ...</CardText>
				<Button onClick={() => props.addItem(props.product)}>Add to cart</Button>
			</CardBody>
		</Card>
	);
};

export default Product;