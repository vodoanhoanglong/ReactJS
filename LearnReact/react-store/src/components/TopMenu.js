import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import {Link} from "react-router-dom";

import { CartContext } from '../contexts/Cart';


const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Store</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                  <Link to='/'>Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  <Link to='/products/'>Products</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                  <CartContext.Consumer>
                    {({ cartItem }) => (
                      <Link to='/products/'>Cart ({cartItem.length})</Link>
                    )}
                  </CartContext.Consumer>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopMenu;