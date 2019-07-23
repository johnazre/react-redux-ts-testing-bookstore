import {
  BookActionTypes,
  IBook,
  ADD_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART,
  FETCH_BOOKS
} from './types'

let initialState: IBook[] = []

export default (state = initialState, action: BookActionTypes) => {
  switch (action.type) {
    case ADD_BOOK_TO_CART:
      return state.map((book: any) => {
        if (book.id === action.payload.id) {
          return { ...book, inCart: true }
        } else {
          return book
        }
      })
    case REMOVE_BOOK_FROM_CART:
      return state.map((book: any) => {
        if (book.id === action.payload.id) {
          return { ...book, inCart: false }
        } else {
          return book
        }
      })
    case FETCH_BOOKS:
      return action.payload

    default:
      return state
  }
}
