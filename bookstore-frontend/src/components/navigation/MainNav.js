import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import CartPreview from '../cart/CartPreview'

class MainNav extends Component {

  render() {

    return (
      <>
        <Navbar bg="secondary" fixed="top" id="main-nav">
          <Link to="/" className="logo">BookStore</Link>
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link to="/" className="main-nav-right-items" style={{ right: "20px" }}> Directory </Link>
            <Link to="/books" className="main-nav-right-items" style={{ right: "16px" }}> Shop </Link>
            <CartPreview cart={this.props.cart} history={this.props.history} />
          </Nav>
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

export default connect(mapStateToProps)(withRouter(MainNav))