import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryNav(props) {

    return (
        <>
            <div id="mySidenav">
                <div className="mr-auto" onClick={() => props.filterBy('')}>
                    <Link to="/"> <u>All</u> </Link>
                </div>
                <div className="mr-auto" onClick={() => props.filterBy('Fiction')}>
                    <Link to="/books/fiction" className="category"> Fiction</Link>
                </div>
                <div className="mr-auto" onClick={() => props.filterBy('Non-Fiction')}>
                    <Link to="/books/nonfiction" className="category"> Non-Fiction </Link>
                </div>
            </div>
        </>
    )
}