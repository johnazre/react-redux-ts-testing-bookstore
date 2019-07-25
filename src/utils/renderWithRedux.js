import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { rootReducer } from '../store'
import thunk from 'redux-thunk'

// Essentially, it's creating a mock store that uses the reducers of the actual application and wrapping the component we pass into this function in the Provider HOC from react-redux.
export default (
  component,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk))
  } = {}
) => ({ ...render(<Provider store={store}>{component}</Provider>) })
