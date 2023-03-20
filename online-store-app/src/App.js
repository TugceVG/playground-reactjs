import React, { Component } from 'react';
import CategoryList from './components/CategoryList';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import { Col, Container, Row } from 'reactstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentCategory: "" }
  }
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
  }

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };
    return (
      <div>
        {/* This Container and Row components come from reactstrap */}
        <Container>
          <Row>
            <Nav />
          </Row>
          <Row>
            <Col xs="3"><CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} /></Col>
            <Col xs="9"><ProductList currentCategory={this.state.currentCategory} info={productInfo} /></Col>
          </Row>
        </Container>
      </div>
    )
  }
}