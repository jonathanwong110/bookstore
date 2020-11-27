import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class MainNav extends Component {

  render() {

    const arrSum = arr => arr.reduce((a, b) => a + b, 0)

    return (
      <>
        <Navbar collapseOnSelect bg="secondary" expand="lg" fixed="top">
          <Link to="/" className="logo">BookStore</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Link to="/" className="span"> Directory </Link>
              <Link to="/books" className="span"> Shop </Link>
              <Link to="/cart" className="span">
                <Image src="https://www.jing.fm/clipimg/full/89-896459_shopping-bag-clipart-icon-transparent-shopping-bag-png.png" width="33px" height="33px" style={{ position: "relative", bottom: "3px" }} />
                <div id="cartQuantityNumber">
                  {arrSum(this.props.cart.map(cartBook => cartBook.quantity))}
                </div>
              </Link>
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