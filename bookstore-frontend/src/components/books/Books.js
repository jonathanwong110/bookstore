import React, { Component } from 'react';
import Book from './Book'
import { CardDeck, Container, Row, Col } from 'react-bootstrap';

class Books extends Component {

    componentDidMount() {
        this.props.loadBooks()
    }

    render() {

        let { books } = this.props

        return (
            <CardDeck>
                <Container>
                    <Row>
                        {books.map(book => {
                            return <Col key={book.id} xs="2" md="2">
                                <Book key={book.id} book={book} />
                            </Col>
                        })
                        }
                    </Row>
                </Container>
            </CardDeck>
        )

    }

}

export default Books