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
        <strong style={{fontWeight: "500"}}>{cartBook.title}</strong>
      </td>
      <td style={{fontWeight: "500"}}>
        ${cartBook.price}.00
      </td>
      <td>
        <Button variant="primary" size="sm" onClick={() => props.removeFromCart(cartBook)} style={{marginRight: "5px"}}>
          -
        </Button>
        [{cartBook.quantity}]
        <Button variant="primary" size="sm" onClick={() => props.addToCart(cartBook)} style={{marginLeft: "5px"}}>
          +
        </Button>
      </td>
      <td style={{fontWeight: "500"}}>
        ${cartBook.price * cartBook.quantity}.00
      </td>
      <td>
        <Button variant="primary" size="sm" onClick={() => props.clearBookFromCart(cartBook)}>
          X
        </Button>
      </td>
    </tr>
  );
}