import React from 'react';
import { Navbar, Table } from 'react-bootstrap';
import CartBook from './CartBook'

export default function Cart(props) {

    const { cart } = props
    const arrSum = arr => arr.reduce((a,b) => a + b, 0)

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
                        // debugger
                        return (
                            <CartBook key={cartBook.id} cartBook={cartBook} addToCart={props.addToCart} removeFromCart={props.removeFromCart} clearBookFromCart={props.clearBookFromCart} />
                        )
                    }
                    )
                    }
                </tbody>
            </Table>
            <div className="cart-total">
                Total: ${arrSum(props.cart.map(cartBook => cartBook.price*cartBook.quantity))}.00
            </div>
        </>
    )
}