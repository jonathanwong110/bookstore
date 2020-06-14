import React, { Component } from 'react'
import Cart from '../components/cart/Cart'
import { connect } from 'react-redux'
import { addToCart, removeFromCart, clearBookFromCart, clearCart } from '../actions/cartActions'

class CartContainer extends Component {

  render() {
    return (
      <div>
        <Cart cart={this.props.cart} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} clearBookFromCart={this.props.clearBookFromCart} clearCart={this.props.clearCart}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cartBooks,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (book) => dispatch(addToCart(book)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    clearBookFromCart: (id) => dispatch(clearBookFromCart(id)),
    clearCart: () => dispatch(clearCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)