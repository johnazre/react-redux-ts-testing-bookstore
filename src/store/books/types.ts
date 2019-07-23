import {
  ADD_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART,
  FETCH_BOOKS
} from './constants'

export interface IBook {
  id: number
  title: string
  subtitle: string
  author: string
  published: string
  publisher: string
  pages: number
  description: string
  website: string
  inCart: boolean
  price: number
  coverImg: string
}

interface addBookToCart {
  type: typeof ADD_BOOK_TO_CART
  payload: IBook
}

interface removeBookFromCart {
  type: typeof REMOVE_BOOK_FROM_CART
  payload: IBook
}

interface fetchBooks {
  type: typeof FETCH_BOOKS
  payload: IBook
}

export type BookActionTypes = addBookToCart | removeBookFromCart | fetchBooks
