import React, { useState, useRef } from 'react';
import { Overlay, Image, Button, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function CartPreview(props) {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  let { cart, history } = props

  const arrSum = arr => arr.reduce((a, b) => a + b, 0)

  function handleClick() {
    history.push("/cart")
  }

  return (
    <>
      <div className="span">
        <Button variant="flat" ref={target} onClick={() => setShow(!show)}>
          <Image id="cart-button-image" src="https://www.jing.fm/clipimg/full/89-896459_shopping-bag-clipart-icon-transparent-shopping-bag-png.png" />
          <div id="cart-quantity-number">
            {arrSum(cart.map(cartBook => cartBook.quantity))}
          </div>
        </Button>
        <Overlay target={target.current} show={show} placement="bottom">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div {...props}>
              <br></br>
              <div id="cart-preview">
                <Popover id="popover-basic">
                  <Popover.Content id="cart-preview-display">
                    <div id="cart-book-preview-contents">
                      {cart.length === 0 ? <div style={{ textAlign: "center", fontSize: "18px", fontWeight: "500" }}>Your cart is empty</div> :
                        cart.map(cartBook => {
                          return (
                            <div key={cartBook.id}>
                              <Image src={cartBook.image} height="100" width="66px" />
                              <br></br>
                              <br></br>
                              <div style={{ fontSize: "17px", wordBreak: "break-word" }}>{cartBook.title}</div>
                              <div style={{ fontSize: "15px" }}>{cartBook.quantity} * ${cartBook.price}.00 = ${cartBook.price * cartBook.quantity}.00</div>
                              <br></br>
                            </div>
                          )
                        })
                      }
                    </div>
                    <div className="divider"></div>
                    <div style={{ fontSize: "20px", fontWeight: "500" }}>
                      Total ({arrSum(cart.map(cartBook => cartBook.quantity))} Items): ${arrSum(cart.map(cartBook => cartBook.price * cartBook.quantity))}.00
                    </div>
                    <br></br>
                    <Button variant="secondary" style={{ width: "100%", marginBottom: "5px" }} onClick={handleClick}>
                      <Link to="/cart" id="cart-shortcut-link" style={{ color: "white" }}>View Cart</Link>
                    </Button>
                  </Popover.Content>
                </Popover>
              </div>
            </div>
          )}
        </Overlay>
      </div>
    </>
  );
}
