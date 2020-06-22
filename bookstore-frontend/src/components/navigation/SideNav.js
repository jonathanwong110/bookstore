import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryNav(props) {

  return (
    <>
      <div id="mySidenav">
        <div className="mr-auto" onClick={() => props.filterBy('')}>
          <Link to="/books" className="book-category"> All </Link>
        </div>
        <div className="mr-auto" onClick={() => props.filterBy('biography')}>
          <Link to="/books/biography" className="book-category"> Biography </Link>
        </div>
        <div className="mr-auto" onClick={() => props.filterBy('business')}>
          <Link to="/books/business" className="book-category"> Business </Link>
        </div>
        <div className="mr-auto" onClick={() => props.filterBy('fiction')}>
          <Link to="/books/fiction" className="book-category"> Fiction </Link>
        </div>
        <div className="mr-auto" onClick={() => props.filterBy('mystery')}>
          <Link to="/books/mystery" className="book-category"> Mystery </Link>
        </div>
        <div className="mr-auto" onClick={() => props.filterBy('nonfiction')}>
          <Link to="/books/nonfiction" className="book-category"> Nonfiction </Link>
        </div>
      </div>
    </>
  )
}