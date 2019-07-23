import React, { Component, ChangeEvent } from 'react'
import Book from './Book'
import { IBook } from '../store/books/types'
import { addBookToCart } from '../store/books/actions'
import { connect } from 'react-redux'
import { AppState } from '../store'

interface BookListProps {
  books: IBook[]
}

interface BookListState {
  filterPhrase: string
}

class BookList extends Component<BookListProps, BookListState> {
  state = {
    filterPhrase: ''
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    this.setState({ filterPhrase: e.target.value })

  render() {
    let listOfBooks = this.props.books
      .filter((book: IBook) => book.title.includes(this.state.filterPhrase))
      .map(book => <Book key={book.id} book={book} />)
    return (
      <div>
        <input type="text" name="filterPhrase" onChange={this.handleChange} />
        {listOfBooks}
      </div>
    )
  }
}
export default connect((state: AppState) => ({ books: state.books }))(BookList)
