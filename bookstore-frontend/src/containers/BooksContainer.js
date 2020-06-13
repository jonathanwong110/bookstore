import React, { Component } from 'react'
import { connect } from 'react-redux'

class BooksContainer extends Component {

    render() {
        return (
            <div>
                BooksContainer
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books.books,
    }
}

export default connect(mapStateToProps, null)(BooksContainer)