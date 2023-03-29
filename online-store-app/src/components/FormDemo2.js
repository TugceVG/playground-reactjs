import alertify from 'alertifyjs';
import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class FormDemo2 extends Component {
    state = { email: "", password: "", city: "", description: "" }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alertify.success(this.state.email + "added to db")
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>

                    <FormGroup>
                        <Label for="email"></Label>
                        <Input onChange={this.handleChange} type="email" id="email" name="email" placeholder="Enter email"></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="password"></Label>
                        <Input onChange={this.handleChange} type="password" id="password" name="password" placeholder="Enter password"></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="city"></Label>
                        <Input onChange={this.handleChange} type="select" id="city" name="city">
                            <option>Istanbul</option>
                            <option>Ankara</option>
                            <option>Izmir</option>
                            <option>Antalya</option>
                            <option>Canakkale</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="description"></Label>
                        <Input onChange={this.handleChange} type="textarea" id="description" name="description" placeholder="Write your description"></Input>
                    </FormGroup>

                    <Button type="submit">Save</Button>

                </Form>

            </div>
        )
    }
}
