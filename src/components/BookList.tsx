import React, { Component, ChangeEvent } from 'react'
import Book from './Book'
import { IBook } from '../store/books/types'
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

  filterBooks = (books: IBook[]) =>
    books.filter((book: IBook) => book.title.includes(this.state.filterPhrase))

  render() {
    let listOfBooks = this.filterBooks(this.props.books).map(book => (
      <Book key={book.id} book={book} />
    ))
    return (
      <div>
        <input type="text" name="filterPhrase" onChange={this.handleChange} />
        {listOfBooks}
      </div>
    )
  }
}
export default connect((state: AppState) => ({ books: state.books }))(BookList)
