import React from 'react'
import { Card } from 'react-bootstrap';
import ShowBook from './ShowBook'

export default function Book(props) {

  let { book } = props
  if (!book) return null

  return (
    <Card style={{ width: '210px', height: '375px', margin: '15px' }}>
      <Card.Img variant="top" src={book.image} height="200px" width="200px" />
      <Card.Body className="card-body-wrapper">
        <Card.Text className="title">{book.title}</Card.Text>
        <Card.Subtitle className="mb-2 text">${book.price}.00</Card.Subtitle>
        <br></br>
        <ShowBook books={props} />
      </Card.Body>
    </Card>
  )
}