import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class MainNav extends Component {

  render() {

    return (
      <>
        <Navbar collapseOnSelect bg="secondary" expand="lg" fixed="top">
          <Link to="/" className="logo">BookStore</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Link to="/" className="span"> Directory </Link>
              <Link to="/books" className="span"> Shop </Link>
              <Link to="/cart" className="span">
                <Image src="https://image.flaticon.com/icons/png/512/263/263142.png" className="shoppingCartIcon" width="30px" height="30px" />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}

export default MainNav