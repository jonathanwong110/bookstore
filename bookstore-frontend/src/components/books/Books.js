import React, { Component } from 'react';
import Book from './Book'

class Books extends Component {

    componentDidMount() {
        this.props.loadBooks()
    }

    render() {

        let { books } = this.props
        console.log('this.props', this.props)

        return (
            
            books.map (book => {
                return <Book key={book.id} book={book} />
            })
        )
    }

}

export default Books