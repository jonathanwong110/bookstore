import axios from 'axios'

const baseURL = 'http://localhost:3000/api/v1/books/'

export const loadBooks = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BOOKS'})
    axios.get(baseURL).then(res => {
      dispatch({ type: 'BOOKS_LOADED', books: res.data })
      }
    )
  }
}