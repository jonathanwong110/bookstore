import React, { Component } from 'react'
import { connect } from 'react-redux'
import Books from '../components/books/Books'
import { loadBooks } from '../actions/booksActions'
import { Container } from 'react-bootstrap'
import SideNav from '../components/navigation/SideNav'
import { addToCart } from '../actions/cartActions'
import { withRouter } from "react-router"

class BooksContainer extends Component {

  constructor() {
    super()
    this.state = {
      filterBy: ""
    }
  }

  componentDidMount() {
    const {category} = this.props.match.params
    if (this.props.match.params.category !== undefined) {
      this.filterBy(category)
    } else {
      this.props.loadBooks()
    }
  }

  filterBy = (category) => {
    this.setState({
      filterBy: category === this.state.filterBy ? "" : category
    })
  }

  render() {
    return (
      <Container>
        <SideNav filterBy={this.filterBy} />
        <Books filterBy={this.state.filterBy} loadBooks={this.props.loadBooks} books={this.props.books} addToCart={this.props.addToCart} />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books.books,
  }
}

export default connect(mapStateToProps, {loadBooks, addToCart})(withRouter(BooksContainer))