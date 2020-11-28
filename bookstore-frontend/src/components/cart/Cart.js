import React from 'react';
import { Table, Button } from 'react-bootstrap';
import CartBook from './CartBook'
import CheckOut from './CheckOut'

export default function Cart(props) {

  let { cart } = props
  const arrSum = arr => arr.reduce((a, b) => a + b, 0)

  return (
    <>
      <br></br>
      <div style={{ marginLeft: "20px", marginBottom: "20px", fontSize: "25px", fontWeight: "500" }}>
        Shopping Cart
      </div>
      <div style={{ marginLeft: "20px", marginBottom: "20px", fontSize: "20px", fontWeight: "400" }}>
        {arrSum(cart.map(cartBook => cartBook.quantity))} Item(s)
        </div>
      <Table>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th style={{ fontSize: "18px", fontWeight: "500" }}>Product</th>
            <th style={{ fontSize: "18px", fontWeight: "500" }}>Title</th>
            <th style={{ fontSize: "18px", fontWeight: "500" }}>Price</th>
            <th style={{ fontSize: "18px", fontWeight: "500" }}>Quantity</th>
            <th style={{ fontSize: "18px", fontWeight: "500" }}>Subtotal</th>
            <th style={{ fontSize: "18px", fontWeight: "500" }}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(cartBook => {
            return (
              <CartBook key={cartBook.id} cartBook={cartBook} addToCart={props.addToCart} removeFromCart={props.removeFromCart} clearBookFromCart={props.clearBookFromCart} />
            )
          })
          }
        </tbody>
      </Table>
      <br></br>
      <br></br>
      <Button variant="primary" size="md" className="clear-cart-button" onClick={() => props.clearCart()}>
        Clear Cart
      </Button>
      <div className="cart-total" style={{ fontWeight: "500" }}>
        Total: ${arrSum(cart.map(cartBook => cartBook.price * cartBook.quantity))}.00
      </div>
      <CheckOut cart={props} />
    </>
  )
}