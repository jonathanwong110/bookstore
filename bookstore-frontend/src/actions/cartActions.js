export const addToCart = (book) => {
  return {
    type: cartActionTypes.ADD_TO_CART,
    payload: book
  }
}

export const removeFromCart = (book) => {
  return {
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: book
  }
}

export const clearBookFromCart = (book) => ({
  type: cartActionTypes.CLEAR_BOOK_FROM_CART,
  payload: book
});

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART
});

export const cartActionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_BOOK_FROM_CART: "CLEAR_BOOK_FROM_CART",
  CLEAR_CART: "CLEAR_CART"
}
