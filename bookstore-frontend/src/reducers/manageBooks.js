export default function manageBooks(state = {
    books: []
}, action) {
    switch (action.type) {
        case 'LOADING_BOOKS':
            return {
                ...state,
                books: [...state.books]
            }
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.books
            }
        default:
            return state
    }
}
