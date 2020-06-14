import React from 'react';
import { Navbar, Table } from 'react-bootstrap';
import CartBook from './CartBook'

export default function Cart(props) {

    const { cart } = props

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
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(book => {
                        return (
                        <CartBook key={book[0]} cartBook={book}/>
                                )
                            }
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}