export const addBookToCart = (cart, cartBookToAdd) => {
  const existingCartBook = cart.find((cartBook) => cartBook.id === cartBookToAdd.id)
  if (existingCartBook) {
    return cart.map((cartBook) =>
      cartBook.id === cartBookToAdd.id ? { ...cartBook, quantity: cartBook.quantity + 1 } : cartBook)
  }
  return [...cart, { ...cartBookToAdd, quantity: 1 }]
}

export const removeBookFromCart = (cart, cartBookToRemove) => {
  const existingCartBook = cart.find(
    (cartBook) => cartBook.id === cartBookToRemove.id)
  if (existingCartBook.quantity === 1) {
    return cart.filter((cartBook) => cartBook.id !== cartBookToRemove.id)
  }
  return cart.map((cartBook) =>
    cartBook.id === cartBookToRemove.id ? { ...cartBook, quantity: cartBook.quantity - 1 } : cartBook)
}