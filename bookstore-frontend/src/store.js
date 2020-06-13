import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import manageBooks from './reducers/manageBooks.js'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    books: manageBooks,
    // cart: manageCart
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store