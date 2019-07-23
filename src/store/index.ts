import booksReducer from './books/reducer'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  books: booksReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default createStore(rootReducer, applyMiddleware(thunk))
