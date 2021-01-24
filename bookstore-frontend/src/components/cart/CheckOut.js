import React, { useState } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';

function DisplayCart(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const arrSum = arr => arr.reduce((a, b) => a + b, 0)

  let { cart } = props

  return (
    <>
      <Button variant="secondary" className="checkout-button" onClick={handleShow}>
        Check Out
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>BookStore</h1>
            <br></br>
            <h5>Subtotal: ${arrSum(cart.cart.map(cartBook => cartBook.price * cartBook.quantity))}.00</h5>
            <br></br>
            <h5>Shipping: $10.00</h5>
            <br></br>
            <h5>Total: ${arrSum(cart.cart.map(cartBook => cartBook.price * cartBook.quantity)) + 10}.00</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Control placeholder="Phone Number" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control placeholder="First Name" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control placeholder="Last Name" />
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Control placeholder="Street" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control placeholder="City" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control placeholder="State" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control placeholder="Zip Code" />
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Control placeholder="Country" />
            </Form.Group>
            <Button variant="secondary" type="submit" style={{width: "100%"}} disabled>
              Payment Info →
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default DisplayCart