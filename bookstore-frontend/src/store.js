import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import manageBooks from './reducers/manageBooks.js'
import manageCart from './reducers/manageCart.js'
import thunk from 'redux-thunk'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'

const reducers = combineReducers({
  books: manageBooks,
  cart: manageCart
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
}

const pReducer = persistReducer(persistConfig, reducers)

const configureStore = (initialState) => {
  return createStore(pReducer, initialState, composeEnhancer(applyMiddleware(thunk)))
}

export const store = configureStore()
export const persistor = persistStore(store)