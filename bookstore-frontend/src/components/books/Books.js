import React, { Component } from 'react';
import Book from './Book'

class Books extends Component {

    componentDidMount() {
        this.props.loadBooks()
    }

    render() {

        let { books } = this.props

        return (
            <div>
                {books.map(book => {
                    return <Book id={book.id} book={book} />
                })
                }
            </div>
        )

    }

}

export default Books