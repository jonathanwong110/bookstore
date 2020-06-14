import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryNav(props) {

    return (
        <>
            <div id="mySidenav">
                <div className="mr-auto" onClick={() => props.filterBy('')}>
                    <Link to="/" className="category"> All </Link>
                </div>
                <div className="mr-auto" onClick={() => props.filterBy('Biography')}>
                    <Link to="/books/biography" className="category"> Biography </Link>
                </div>
                <div className="mr-auto" onClick={() => props.filterBy('Business')}>
                    <Link to="/books/business" className="category"> Business </Link>
                </div>
                <div className="mr-auto" onClick={() => props.filterBy('Fiction')}>
                    <Link to="/books/fiction" className="category"> Fiction </Link>
                </div>
                <div className="mr-auto" onClick={() => props.filterBy('Mystery')}>
                    <Link to="/books/mystery" className="category"> Mystery </Link>
                </div>
                <div className="mr-auto" onClick={() => props.filterBy('Non-Fiction')}>
                    <Link to="/books/nonfiction" className="category"> Nonfiction </Link>
                </div>
            </div>
        </>
    )
}