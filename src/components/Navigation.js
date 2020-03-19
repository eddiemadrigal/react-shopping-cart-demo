import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import CartContext from '../contexts/CartContext';

import '../index.css';

const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { cart } = useContext(CartContext);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="navlink" to="/">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" to="/cart">
                Cart <span>{cart.length}</span>
              </NavLink>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;