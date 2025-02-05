import React, { useEffect } from 'react'
import TopNav from './components/TopNav'
import { Container, Row, Col } from 'reactstrap'
import BookList from './components/BookList'
import Cart from './components/Cart'
import { fetchBooks } from './store/books/actions'
import { useDispatch } from 'react-redux'

function App() {
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])
  return (
    <div className="App">
      <TopNav />
      <Container>
        <Row>
          <Col xs={{ size: 8 }}>
            <BookList />
          </Col>
          <Col>
            <Cart />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
