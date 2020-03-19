import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Product from './Product';
import ProductContext from '../contexts/ProductContext.js';

const Products = () => {
  const { products, addItem } = useContext(ProductContext);
  return (
    <Container>
      <Row>
          {products.map(product => (
            <Col sm="3">
              <Product
                key={product.id}
                product={product}
                addItem={addItem}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Products;