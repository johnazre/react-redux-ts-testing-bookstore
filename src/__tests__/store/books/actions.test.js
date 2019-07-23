import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import mockAxios from 'axios'
import * as actions from '../../../store/books/actions'
import * as types from '../../../store/books/constants'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

let booksArr = [
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

describe('actions', () => {
  describe('the fetchBooks action creator', () => {
    it('creates FETCH_BOOKS when fetching books has been done', () => {
      // Create an instance of the mocked store
      const store = mockStore({ books: [] })

      // Recreate the mocked axios get request
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: booksArr })
      )

      // Declare the expected actions
      const expectedActions = [{ type: types.FETCH_BOOKS, payload: booksArr }]

      // Dispatch the action creators you want to test
      return store.dispatch(actions.fetchBooks()).then(() => {
        // Test if the correct actions were dispatched
        expect(store.getActions()).toEqual(expectedActions)

        // You COULD theoretically test the resulting store state using store.getState(), but
        // in my opinion, that's the reducer's job, so that would be more of an integration test
        // than a unit test
      })
    })
  })

  describe('the addBookToCart action creator', () => {
    it('should dispatch ADD_BOOK_TO_CART', () => {
      // Create an instance of the store
      const store = mockStore({
        books: []
      })

      // Recreate the mocked axios patch request
      mockAxios.patch.mockImplementationOnce(() =>
        Promise.resolve({ data: booksArr[0] })
      )

      // Declare the expected actions
      const expectedActions = [
        {
          type: types.ADD_BOOK_TO_CART,
          payload: booksArr[0]
        }
      ]

      // Dispatch the action creators you want to test
      return store.dispatch(actions.addBookToCart(1)).then(() => {
        // Test if the correct actions were dispatched
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
