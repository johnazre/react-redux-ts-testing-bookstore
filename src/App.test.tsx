import React from 'react'
import ConnectedApp, { App } from './App'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import TopNav from './components/TopNav'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

it('renders without crashing', () => {
  // Create your mocked store
  const store = mockStore({ books: [] })

  // Create your wrapper instance
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  )

  console.log('props', wrapper.childAt(0).props())

  expect(wrapper.childAt(0).contains(<TopNav />)).toBe(true)
})
