import React, { Component } from 'react'
import axios from 'axios'
import TopNav from './components/TopNav'
import { Container, Row, Col } from 'reactstrap'
import BookList from './components/BookList'
import Cart from './components/Cart'

class App extends Component {
  componentDidMount() {
    axios
      .get(`http://localhost:8082/api/books`)
      .then(res => this.setState({ books: res.data }))
  }

  render() {
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
}

export default App
