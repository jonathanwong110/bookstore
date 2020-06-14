import React, { Component } from 'react'
import Cart from '../components/cart/Cart'
import { connect } from 'react-redux'

class CartContainer extends Component {

  render() {
    return (
      <div>
        <Cart cart={this.props.cart}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cartBooks,
  }
}

export default connect(mapStateToProps, null)(CartContainer)