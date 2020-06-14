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

export const removeBookFromCart = (cartBooks, cartBookToRemove) => {
    const existingCartBook = cartBooks.find(
        (cartBook) => cartBook.id === cartBookToRemove.id
    );

    if (existingCartBook.quantity === 1) {
        return cartBooks.filter((cartBook) => cartBook.id !== cartBookToRemove.id);
    }

    return cartBooks.map((cartBook) =>
        cartBook.id === cartBookToRemove.id
            ? { ...cartBook, quantity: cartBook.quantity - 1 }
            : cartBook
    );
};