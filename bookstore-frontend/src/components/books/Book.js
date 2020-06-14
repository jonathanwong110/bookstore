import React from 'react'
import { Card } from 'react-bootstrap';

export default function Book(props) {

    const { book } = props

    return (
        <Card style={{ width: '10rem', height: '17rem', margin: '10px' }}>
            <Card.Img variant="top" src={book.image} height="200px" width="200px" />
            <Card.Body>
                {/* <a href="/books" class="title">{book.title}</a> */}
                <a href="/books" className="title">{book.title}</a>
            </Card.Body>
        </Card>
    )
}