export const addToCart = (book) => {
    return {
        type: ADD_TO_CART,
        payload: book
    }
}

export const removeFromCart = (book) => {
    return {
        type: REMOVE_FROM_CART,
        payload: book
    }
}

export const clearItemFromCart = (book) => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: book
  });
  
  export const clearCart = () => ({
    type: CLEAR_CART
  });

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART"
export const CLEAR_CART = "CLEAR_CART"
