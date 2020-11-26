import { cartActionTypes } from "../actions/cartActions"
import { addBookToCart, removeBookFromCart } from '../abilities/cartAbilities'

export default function manageCart(state = {
  cart: []
}, action) {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return {
        ...state, cart: addBookToCart(state.cart, action.payload) 
      }
    case cartActionTypes.REMOVE_FROM_CART:
      return {
        ...state, cart: removeBookFromCart(state.cart, action.payload)
      }
    case cartActionTypes.CLEAR_BOOK_FROM_CART:
      return {
        ...state, cart: state.cart.filter((cartBook) => cartBook.id !== action.payload.id)
      }
    case cartActionTypes.CLEAR_CART:
      return {
        ...state, cart: []}
    default:
      return state
  }
}
