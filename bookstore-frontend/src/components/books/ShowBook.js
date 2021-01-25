import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function DisplayBook(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { books } = props
  if (!books) return null

  function handleAdd() {
    books.addToCart(books.book)
    handleClose()
  }

  return (
    <>
      <Button variant="secondary" onClick={handleShow} style={{ fontSize: "15px", width: "90px", position: "relative", bottom: "10px" }}>
        Details
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img
              alt={books.book.id} src={books.book.image} height="300px" width="200px" className="showBookImage">
            </img>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 style={{ textAlign: "center" }}> {books.book.title} </h2>
          <p style={{ textAlign: "center" }}> by </p>
          <h6 style={{ textAlign: "center" }}>{books.book.author}</h6>
          <br></br>
          <h4 style={{ textAlign: "center" }}>${books.book.price}.00</h4>
          <br></br>
          <p>{books.book.description}</p>
          <h3>Reviews: </h3>
          <br></br>
          {books.book.reviews && books.book.reviews.length > 0 ?
            books.book.reviews.map(review => {
              return (
                <div key={review.id}>
                  {review.content}
                </div>
              )
            })
            :
            <>
              <p>
                No Reviews so far!
                </p>
            </>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DisplayBook