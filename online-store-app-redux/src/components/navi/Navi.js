import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import "./navi.css";
import CartSummary from '../cart/CartSummary';
import { Link } from 'react-router-dom';

export default class Navi extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { isOpen: false };
    }
    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand><Link to="/">Online Store App</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar className="right">
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">
                                    <Link to="/saveproduct">Add Product</Link>
                                </NavLink>
                            </NavItem>
                            <CartSummary />
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
