import React, { Component } from 'react';
import Book from './Book'
import { CardDeck, Container, Row, Col } from 'react-bootstrap';
import SearchBooks from './SearchBooks'

class Books extends Component {

    constructor() {
        super();
        this.state = {
            searchEntry: '',
            searchQuery: '',
            loading: false
        }
    }

    componentDidMount() {
        this.props.loadBooks()
    }

    handleChange = (e) => {
        this.setState({
            searchEntry: e.target.value.toLowerCase(),
            loading: true
        })
    }

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handleSubmit(e)
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const searchQuery = this.state.searchEntry
        this.setState({
            searchQuery
        })
    }

    render() {

        const { searchEntry, searchQuery } = this.state;
        let { books } = this.props
        if (searchQuery.length > 0) { books = books.filter(item => item.title.toLowerCase().includes(searchQuery)) }

        return (
            <CardDeck>
                <Container>
                    <SearchBooks onKeyPress={this.onKeyPress} {...{ searchEntry, searchQuery }} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    <br></br>
                    <Row>
                        {books.map(book => {
                            return this.props.filterBy === "" || book.category === this.props.filterBy ?
                                <Col key={book.id} xs="2" md="2">
                                    <Book key={book.id} book={book} />
                                </Col> : null
                        }
                        )}
                    </Row>
                </Container>
            </CardDeck>
        )

    }

}

export default Books