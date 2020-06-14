import React, { Component } from 'react'
import { connect } from 'react-redux'
import Books from '../components/books/Books'
import { loadBooks } from '../actions/booksActions'
import { Container } from 'react-bootstrap'

class BooksContainer extends Component {

    render() {
        return (
            <Container>
                <div id="mySidenav" class="sidenav">
                    Category
                    <br></br>
                    <a href="/" class="category">All</a>
                    <br></br>
                    <a href="/books/fiction" class="category">Fiction</a>
                    <br></br>
                    <a href="/books/nonfiction" class="category">Non-Fiction</a>
                    <br></br>
                </div>
                <Books loadBooks={this.props.loadBooks} books={this.props.books} />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books.books,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadBooks: () => dispatch(loadBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)