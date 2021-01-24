import React from 'react'
import { Button } from 'react-bootstrap'

export default function CartBook(props) {

  let { cartBook } = props

  return (
    <tr key={cartBook.id} style={{ textAlign: "center" }}>
      <td>
        <br></br>
        <img src={cartBook.image} alt={cartBook[1]} height='100px' width='100px'>
        </img>
      </td>
      <td>
        <strong style={{ fontWeight: "500" }}>{cartBook.title}</strong>
      </td>
      <td style={{ fontWeight: "500" }}>
        ${cartBook.price}.00
      </td>
      <td>
        <Button variant="secondary" size="sm" id="minus-button" onClick={() => props.removeFromCart(cartBook)} style={{ marginRight: "5px" }}>
          -
        </Button>
        <strong style={{ fontWeight: "500" }} id="cartBookQuantity">[{cartBook.quantity}]</strong>
        <Button variant="secondary" size="sm" id="plusButton" onClick={() => props.addToCart(cartBook)} style={{ marginLeft: "5px" }}>
          +
        </Button>
      </td>
      <td style={{ fontWeight: "500" }}>
        ${cartBook.price * cartBook.quantity}.00
      </td>
      <td>
        <Button variant="secondary" size="sm" onClick={() => props.clearBookFromCart(cartBook)}>
          X
        </Button>
      </td>
    </tr>
  );
}