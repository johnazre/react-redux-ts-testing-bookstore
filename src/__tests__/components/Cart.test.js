import React from 'react'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import Cart from '../../components/Cart'
import renderWithRedux from '../../utils/renderWithRedux'
import { createStore } from 'redux'

const mockBooks = [
  {
    id: 1,
    title: 'Eloquent JavaScript, First Edition',
    author: 'Marijn Haverbeke',
    description:
      'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
    inCart: true
  },
  {
    id: 2,
    title: 'Eloquent JavaScript, Second Edition',
    author: 'Marijn Haverbeke',
    description:
      'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
    inCart: false
  }
]

describe('Cart component', () => {
  it('should initially render all the books with an inCart property value of "true"', () => {
    const store = createStore(() => ({ books: mockBooks }))
    const { getAllByTestId } = renderWithRedux(<Cart />, {
      store
    })

    expect(getAllByTestId('cart-title')).toHaveLength(1)
    expect(getAllByTestId('cart-title')[0]).toHaveTextContent('First')
  })
})
