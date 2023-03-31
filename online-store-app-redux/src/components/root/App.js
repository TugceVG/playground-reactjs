import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import CategoryList from '../categories/CategoryList'

import Navi from '../navi/Navi'
import ProductList from '../products/ProductList'
// import Dashboard from './Dashboard'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Navi />
        <Row>
          <Col xs="3"><CategoryList /></Col>
          <Col xs="9"><ProductList /></Col>
        </Row>
      </Container>
    )
  }
}

