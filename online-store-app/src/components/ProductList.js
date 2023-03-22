import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class ProductList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }

    state = {};

    render() {
        return (
            <div>
                <h3>{this.props.info.title}-{this.props.currentCategory}</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Unit Price </th>
                            <th>Quantity Per Unit </th>
                            <th>Unit In Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map((product) => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitsInStock}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
