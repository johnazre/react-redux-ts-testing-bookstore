import React from 'react'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import BookList from '../../components/BookList'
import renderWithRedux from '../../utils/renderWithRedux'
import { createStore } from 'redux'

const mockBooks = [
  {
    id: 1,
    title: 'Eloquent JavaScript, First Edition',
    author: 'Marijn Haverbeke',
    description:
      'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.'
  },
  {
    id: 2,
    title: 'Eloquent JavaScript, Second Edition',
    author: 'Marijn Haverbeke',
    description:
      'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.'
  }
]

describe('Book component', () => {
  it('should initially render all the books', () => {
    const store = createStore(() => ({ books: mockBooks }))
    const { getAllByTestId } = renderWithRedux(<BookList />, {
      store
    })

    expect(getAllByTestId('title')).toHaveLength(2)
  })
})
