import React from 'react'
import { Link } from 'react-router-dom'

export default function SideNav(props) {

  return (
    <>
      <div id="sidenav">
        <div className="book-category" style={{ color: "black", marginBottom: "15px", fontSize: "20px" }}>Categories</div>
        <Link to="/books" className="book-category" onClick={() => props.filterBy('')}> All </Link>
        <Link to="/books/category/biography" className="book-category" onClick={() => props.filterBy('biography')}> Biography </Link>
        <Link to="/books/category/business" className="book-category" onClick={() => props.filterBy('business')}> Business </Link>
        <Link to="/books/category/fiction" className="book-category" onClick={() => props.filterBy('fiction')}> Fiction </Link>
        <Link to="/books/category/mystery" className="book-category" onClick={() => props.filterBy('mystery')}> Mystery </Link>
        <Link to="/books/category/nonfiction" className="book-category" onClick={() => props.filterBy('nonfiction')}> Nonfiction </Link>
      </div>
    </>
  )
}