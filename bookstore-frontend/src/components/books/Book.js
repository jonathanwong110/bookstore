import React from 'react'
import { Card } from 'react-bootstrap';
import ShowBook from './ShowBook'

export default function Book(props) {

  const { book } = props

  return (
    <Card style={{ width: '10rem', height: '22rem', margin: '15px' }}>
      <Card.Img variant="top" src={book.image} height="200px" width="200px" />
      <Card.Body>
        <Card.Title className="title">{book.title}</Card.Title>
        <br></br>
        <ShowBook books={props} />
      </Card.Body>
    </Card>
  )
}