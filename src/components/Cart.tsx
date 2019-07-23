import React from 'react'
import { useSelector } from 'react-redux'

import CartItem from './CartItem'
import { AppState } from '../store'
import { IBook } from '../store/books/types'

const Cart = () => {
  let cartItems = useSelector((state: AppState) =>
    state.books.filter((book: IBook) => book.inCart)
  )
  let arrOfCartItems = cartItems.filter((item: IBook) => item.inCart)
  let cartItemComponents = arrOfCartItems.map((item: IBook) => (
    <CartItem key={item.id} item={item} />
  ))

  let totalPrice = arrOfCartItems.reduce(
    (acc: number, cartItem: IBook) => (acc += cartItem.price),
    0
  )
  return (
    <div>
      {cartItemComponents}
      <p>Total: ${totalPrice}.00 </p>
    </div>
  )
}
export default Cart
