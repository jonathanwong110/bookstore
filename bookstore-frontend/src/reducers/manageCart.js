import { cartActionTypes } from "../actions/cartActions"
import { addBookToCart } from '../abilities/cartAbilities'

export default function manageCart(state = {
    cartBooks: []
}, action) {
    switch (action.type) {
        case cartActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartBooks: addBookToCart(state.cartBooks, action.payload)
            }
        default:
            return state
    }
}
