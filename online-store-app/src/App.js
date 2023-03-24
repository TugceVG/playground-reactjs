import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import alertify from 'alertifyjs';
import { Col, Container, Row } from 'reactstrap';

import CategoryList from './components/CategoryList';
import Navi from './components/Navi';
import ProductList from './components/ProductList';
import NotFound from './components/NotFound';
import CartList from './components/CartList';

export default class App extends Component {
  // This declaration is the old generation
  // constructor(props) {
  //   super(props);
  //   this.state = { currentCategory: "", products: [] }
  // }

  // This declaration is the new so you don't have to put your state declaration in constructor
  state = { currentCategory: "", products: [], cart: [] }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!");
  }

  componentDidMount() {
    this.getProducts();
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
  }

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };
    return (
      <Container>
        <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
        <Row>
          <Col xs="3"><CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} /></Col>
          <Col xs="9">
            <Routes>
              <Route path="/" element={<ProductList
                addToCart={this.addToCart}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />} />
              <Route
                path="/cart"
                element={<CartList cart={this.state.cart} removeFromCart={this.removeFromCart} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    )
  }
}