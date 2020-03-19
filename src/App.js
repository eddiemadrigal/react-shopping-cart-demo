import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { Route } from 'react-router-dom';
import data from './data';

import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import ProductContext from './contexts/ProductContext.js';
import CartContext from './contexts/CartContext.js';

function App() {

  

  const [products] = useState(data);
  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

  const addItem = item => {
    if (!cart.find(cartItem => cartItem.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  const removeItem = id => {
    setCart(cart.filter(item => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (

    <div>
      <Container>
        <ProductContext.Provider value={{ products, addItem }}>
          <CartContext.Provider value={{ cart, removeItem }}>
            <div>
              <Navigation />
              <Route exact path="/" component={Products} />
              <Route path="/cart" component={ShoppingCart} />
            </div>
          </CartContext.Provider>
        </ProductContext.Provider>
      </Container>
    </div>
  );
}

export default App;