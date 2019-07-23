import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from 'reactstrap'
import { IBook } from '../store/books/types'
import { addBookToCart } from '../store/books/actions'
import { connect } from 'react-redux'

interface BookProps {
  book: IBook
  addBookToCart(id: number): void
}

const Book = (props: BookProps) => {
  let { id, title, author, description } = props.book
  return (
    <Card>
      <Row>
        <Col xs={{ size: 3 }}>
          <CardImg
            style={{ width: 100 }}
            top
            src={props.book.coverImg}
            alt="Card image cap"
          />
        </Col>
        <Col>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{author}</CardSubtitle>
            <CardText>{description}</CardText>
            <Button onClick={() => props.addBookToCart(id)}>Add To Cart</Button>
          </CardBody>
        </Col>
      </Row>
    </Card>
  )
}
export default connect(
  null,
  { addBookToCart }
)(Book)
