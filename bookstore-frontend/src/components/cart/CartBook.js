import React from 'react'
import { Button } from 'react-bootstrap'

export default function CartBook(props) {

    const { cartBook } = props

    return (
        <tr key={cartBook[0]}>
            <td>
                <strong>{cartBook[1]}</strong>
                <br></br>
                <img src={cartBook[4]} alt={cartBook[1]}height='100px' width='100px'>
                </img>
            </td>
            <td>
                {cartBook[3]}
            </td>
            <td>
                {cartBook[2]}
            </td>
            <td>
                <Button variant="danger">
                    Remove from Cart
                </Button>
            </td>
        </tr>        
    );
  }