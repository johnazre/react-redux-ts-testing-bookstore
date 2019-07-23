import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { IBook } from '../store/books/types'
import { removeBookFromCart } from '../store/books/actions'

interface CartItemProps {
  item: IBook
}
const CartItem = (props: CartItemProps) => {
  let dispatch = useDispatch()
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.item.title}</CardTitle>
          <CardSubtitle>${props.item.price}.00</CardSubtitle>
          <Button onClick={() => dispatch(removeBookFromCart(props.item.id))}>
            Remove
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default CartItem
