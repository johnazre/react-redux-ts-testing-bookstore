import booksReducer from './books/reducer'
import { combineReducers, createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export const rootReducer = combineReducers({
  books: booksReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
