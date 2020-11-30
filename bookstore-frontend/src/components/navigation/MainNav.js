import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import CartHover from '../cart/CartHover'

class MainNav extends Component {

  render() {

    return (
      <>
        <Navbar bg="secondary" fixed="top">
          <Link to="/" className="logo">BookStore</Link>
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link to="/" className="span" style={{ position: "relative", top: "5px" }}> Directory </Link>
            <Link to="/books" className="span" style={{ position: "relative", top: "5px" }}> Shop </Link>
            <CartHover cart={this.props.cart} history={this.props.history} />
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