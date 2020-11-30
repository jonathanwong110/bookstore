import React, { Component } from 'react';
import Book from './Book'
import { Container, Row, Col } from 'react-bootstrap';
import SearchBooks from './SearchBooks'

class Books extends Component {

  constructor() {
    super();
    this.state = {
      searchEntry: '',
      searchQuery: '',
      loading: false
    }
  }

  componentDidMount() {
    this.props.loadBooks()
  }

  handleChange = (e) => {
    this.setState({
      searchEntry: e.target.value.toLowerCase(),
      loading: true
    })
  }

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleSubmit(e)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const searchQuery = this.state.searchEntry
    this.setState({
      searchQuery
    })
  }

  render() {

    let { searchEntry, searchQuery } = this.state;
    let { books } = this.props
    if (searchQuery.length > 0) { books = books.filter(item => item.title.toLowerCase().includes(searchQuery)) }

    return (
      <Container style={{ textAlign: "center" }}>
        <br></br>
        <SearchBooks onKeyPress={this.onKeyPress} {...{ searchEntry, searchQuery }} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <br></br>
        <div style={{ textAlign: "center", fontSize: "25px" }}>{this.props.filterBy.charAt(0).toUpperCase() + this.props.filterBy.slice(1)} Books </div>
        <br></br>
        <Row>
          {books.map(book => {
            return this.props.filterBy === "" || book.category === this.props.filterBy ?
              <div style={{ marginLeft: "130px", textAlign: "center" }} key={book.id}>
                <Col key={book.id}>
                  <Book className="individual-book" book={book} addToCart={this.props.addToCart} />
                </Col>
              </div> : null
          })}
        </Row>
      </Container>
    )
  }
}

export default Books