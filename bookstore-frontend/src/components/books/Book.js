import React from 'react'
import { Button, Container, Card, Col, Row } from 'react-bootstrap';
import ShowBook from './ShowBook'

export default function Book(props) {

  const { book, addToCart } = props
  if (!book) return null

  function handleAdd() {
    addToCart(book)
  }

  return (
    <Card style={{ width: '200px', height: '375px', margin: '15px' }}>
      <Card.Img variant="top" src={book.image} height="200px" width="200px" />
      <Card.Body>
        <Card.Text className="title">{book.title}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">${book.price}.00</Card.Subtitle>
        <br></br>
        <Container>
          <Row>
            <Col>
              <ShowBook books={props} />
            </Col>
            <Col>
              <Button style={{fontSize: "15px", width: "90px", whiteSpace: "nowrap", marginLeft: "-11px"}} onClick={handleAdd}>Quick Add</Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}