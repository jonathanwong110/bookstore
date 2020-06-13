import React from 'react'
import { Card } from 'react-bootstrap';

export default function Book(props) {

    const { book } = props

    return (
        <Card style={{ width: '15rem', margin: '20px' }}>
        <Card.Img variant="top" src={book.image} height="200px" width="auto"/>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            ${book.price}
            <br></br>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}