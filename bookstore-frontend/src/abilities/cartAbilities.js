export const addBookToCart = (cartBooks, cartBookToAdd) => {
    const existingCartBook = cartBooks.find(
        (cartBook) => cartBook.id === cartBookToAdd.id
    );

    if (existingCartBook) {
        return cartBooks.map((cartBook) =>
            cartBook.id === cartBookToAdd.id
                ? { ...cartBook, quantity: cartBook.quantity + 1 }
                : cartBook
        );
    }

    return [...cartBooks, { ...cartBookToAdd, quantity: 1 }];
};