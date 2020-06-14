import { addToCart } from "../actions/cartActions"

export default function manageCart(state = {
    cartBooks: []
}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartBooks: addToCart(state.cartBooks, action.payload)
            }
        default:
            return state
    }
}
