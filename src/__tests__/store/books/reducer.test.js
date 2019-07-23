import reducer from '../../../store/books/reducer'
import { FETCH_BOOKS } from '../../../store/books/constants'

let initialState = []

let someBooks = [
  {
    title: 'Eloquent JavaScript, Second Edition',
    subtitle: 'A Modern Introduction to Programming',
    author: 'Marijn Haverbeke',
    published: '2014-12-14T00:00:00.000Z',
    publisher: 'No Starch Press',
    pages: 472,
    description:
      'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
    website: 'http://eloquentjavascript.net/',
    inCart: true,
    price: 5,
    coverImg: 'https://eloquentjavascript.net/img/cover.jpg',
    id: 1
  }
]

describe('reducer', () => {
  it('should return an empty array if state is undefined', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should add the books to the cart from the api', () => {
    expect(
      reducer(initialState, { type: FETCH_BOOKS, payload: someBooks })
    ).toEqual(someBooks)
  })
})
