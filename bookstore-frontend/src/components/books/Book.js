import React from 'react'

export default function Book(props) {

    const { book } = props

    return (
        <div>
            {book.title}
        </div>
    )
}