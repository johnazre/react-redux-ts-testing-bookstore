import React from 'react'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'
import Book from '../../components/Book'
import renderWithRedux from '../../utils/renderWithRedux'

const mockBook = {
  title: 'Eloquent JavaScript, Second Edition',
  author: 'Marijn Haverbeke',
  description:
    'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.'
}

describe('Book component', () => {
  it('should render all the book info and "Add To Cart" button', () => {
    const { getByTestId } = renderWithRedux(<Book book={mockBook} />)

    expect(getByTestId('title')).toHaveTextContent(mockBook.title)
    expect(getByTestId('author')).toHaveTextContent(mockBook.author)
    expect(getByTestId('description')).toHaveTextContent(mockBook.description)
    expect(getByTestId('add-button')).toHaveTextContent('Add To Cart')
  })

  xit('should call the addBookToCart method when the button is clicked', () => {
    let addBookToCart = jest.fn()
    const { getByTestId } = renderWithRedux(
      <Book book={mockBook} addBookToCart={addBookToCart} />
    )
    fireEvent.click(getByTestId('add-button'))
    expect(addBookToCart).toHaveBeenCalledTimes(1)
  })
})
