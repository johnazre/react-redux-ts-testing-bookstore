import React from 'react'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import CartItem from '../../components/CartItem'
import renderWithRedux from '../../utils/renderWithRedux'

const mockBook = {
  title: 'Eloquent JavaScript, Second Edition',
  author: 'Marijn Haverbeke',
  description:
    'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
  price: 5
}

describe('CartItem component', () => {
  it('should render all the book info and "Remove" button', () => {
    const { getByTestId } = renderWithRedux(<CartItem item={mockBook} />)

    expect(getByTestId('cart-title')).toHaveTextContent(mockBook.title)
    expect(getByTestId('cart-price')).toHaveTextContent('$5.00')
    expect(getByTestId('remove-button')).toHaveTextContent('Remove')
  })
})
