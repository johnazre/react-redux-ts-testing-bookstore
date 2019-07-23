import { Dispatch } from 'redux'
import axios from 'axios'
import { ADD_BOOK_TO_CART, REMOVE_BOOK_FROM_CART, FETCH_BOOKS } from './types'

export const addBookToCart = (id: number) => async (dispatch: Dispatch) => {
  let response = await axios.patch(
    `http://localhost:8082/api/books/cart/add/${id}`
  )
  let updatedBook = response.data

  dispatch({
    type: ADD_BOOK_TO_CART,
    payload: updatedBook
  })
}

export const removeBookFromCart = (id: number) => async (
  dispatch: Dispatch
) => {
  let response = await axios.patch(
    `http://localhost:8082/api/books/cart/add/${id}`
  )
  let updatedBook = response.data

  dispatch({
    type: REMOVE_BOOK_FROM_CART,
    payload: updatedBook
  })
}

export const fetchBooks = (id: number) => async (dispatch: Dispatch) => {
  let response = await axios.get(`http://localhost:8082/api/books`)
  let books = response.data

  dispatch({
    type: FETCH_BOOKS,
    payload: books
  })
}
