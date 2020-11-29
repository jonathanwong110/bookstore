import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap';
// import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import CartHover from '../cart/CartHover'

class MainNav extends Component {

  render() {

    return (
      <>
        <Navbar collapseOnSelect bg="secondary" expand="lg" fixed="top">
          <Link to="/" className="logo">BookStore</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Link to="/" className="span" style={{position: "relative", top: "5px"}}> Directory </Link>
              <Link to="/books" className="span" style={{position: "relative", top: "5px"}}> Shop </Link>
              <CartHover cart={this.props.cart}/>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  }
}

export default connect(mapStateToProps)(MainNav)