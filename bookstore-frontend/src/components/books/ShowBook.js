import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function DisplayBook(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { books } = props
    if (!books) return null

    function handleAdd() {
        books.addToCart(books.book)
        handleClose()
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <img
                            alt={books.book.id} src={books.book.image} height="300px" width="200px">
                        </img>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>{books.book.title}</h2>
                    by
                    <br></br>
                    <br></br>
                    <h6>{books.book.author}</h6>
                    <br></br>
                    <h4>${books.book.price}.00</h4>
                    <br></br>
                    <p>{books.book.description}</p>
                    <h3>Reviews: </h3>
                    {books.book.reviews && books.book.reviews.length > 0 ?
                        books.book.reviews.map(review => {
                            return (
                                <ul key={review.id}>
                                    <li>
                                        {review.content}
                                    </li>
                                </ul>
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

                    <Button variant="success" onClick={handleAdd}>
                        Add to Cart
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DisplayBook