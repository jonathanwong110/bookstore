import React from 'react';
import { Navbar, Table, Button } from 'react-bootstrap';
import CartBook from './CartBook'
import CheckOut from './CheckOut'

export default function Cart(props) {

    const { cart } = props
    const arrSum = arr => arr.reduce((a, b) => a + b, 0)

    return (
        <>
            <br></br>
            <Navbar>
                <Navbar.Brand>
                    Shopping Cart
            </Navbar.Brand>
            </Navbar>
            <Table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(cartBook => {
                        return (
                            <CartBook key={cartBook.id} cartBook={cartBook} addToCart={props.addToCart} removeFromCart={props.removeFromCart} clearBookFromCart={props.clearBookFromCart} />
                        )
                    }
                    )
                    }
                </tbody>
            </Table>
            <br></br>
            <br></br>
            <Button variant="primary" size="md" className="clear-cart-button" onClick={() => props.clearCart()}>
                Clear Cart
            </Button>
            <div className="cart-total">
                Total: ${arrSum(props.cart.map(cartBook => cartBook.price * cartBook.quantity))}.00
            </div>
            <CheckOut cart={props}/>
        </>
    )
}