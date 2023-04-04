import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navi from '../navi/Navi'
import CartDetail from '../cart/CartDetail';
import NotFound from '../common/NotFound';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Navi />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Dashboard />} />
          <Route path="/cart" element={<CartDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    )
  }
}
