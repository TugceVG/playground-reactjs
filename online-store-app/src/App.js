import './App.css';
import CategoryList from './components/CategoryList';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import { Col, Container, Row } from 'reactstrap';

function App() {
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
          <Col xs="3"><CategoryList info={categoryInfo} /></Col>
          <Col xs="9"><ProductList info={productInfo} /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
