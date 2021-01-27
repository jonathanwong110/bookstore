import React from 'react';
import { Table, Button, Container, Row, Col } from 'react-bootstrap';
import CartBook from './CartBook'
import CheckOut from './CheckOut'

export default function Cart(props) {

  let { cart } = props
  const arrSum = arr => arr.reduce((a, b) => a + b, 0)

  return (
    <>
      <div style={{ marginLeft: "20px", marginBottom: "20px", fontSize: "25px", fontWeight: "500" }}>
        Shopping Cart
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
      <Container fluid="sm" className="cart-total-info-wrapper">
        <Row>
          <Col className="cart-total-left-col" style={{ borderBottom: "1px solid #b3b3b3" }}>Order Summary</Col>
          <Col className="cart-total-right-col" style={{ borderBottom: "1px solid #b3b3b3" }}>{arrSum(cart.map(cartBook => cartBook.quantity))} Item(s)</Col>
        </Row>
        <Row>
          <Col className="cart-total-left-col">Order Total</Col>
          <Col className="cart-total-right-col">${arrSum(cart.map(cartBook => cartBook.price * cartBook.quantity))}.00</Col>
        </Row>
      </Container>
      <Button variant="secondary" size="md" className="clear-cart-button" onClick={() => props.clearCart()}>
        Clear Cart
      </Button>
      <CheckOut cart={props} />
    </>
  )
}