import React, { Component } from 'react'
import { connect } from 'react-redux'
import Books from '../components/books/Books'
import { loadBooks } from '../actions/booksActions'

class BooksContainer extends Component {

    render() {
        return (
            <div>
                <Books loadBooks={this.props.loadBooks}/>
            </div>
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