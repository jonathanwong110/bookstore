import React from 'react'
import { Button } from 'react-bootstrap'

export default function CartBook(props) {

    const { cartBook } = props

    return (
        <tr key={cartBook.id}>
            <td>
                <br></br>
                <img src={cartBook.image} alt={cartBook[1]} height='100px' width='100px'>
                </img>
            </td>
            <td>
                <strong>{cartBook.title}</strong>
            </td>
            <td>
                ${cartBook.price * cartBook.quantity}.00
            </td>
            <td>
                {cartBook.quantity}
            </td>
            <td>
                <Button variant="danger" onClick={() => props.removeFromCart(cartBook)}>
                    Remove from Cart
                </Button>
            </td>
        </tr>        
    );
  }