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
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(cartBook => {
                        console.log('cartBook', cartBook)
                        return (
                        <CartBook key={cartBook.id} cartBook={cartBook}/>
                                )
                            }
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}