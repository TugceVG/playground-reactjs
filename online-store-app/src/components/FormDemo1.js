import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state = { userName: "", city: "" }

    onChangeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        alert(this.state.userName);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h3>User Name</h3>
                    <input type="text" name="userName" onChange={this.onChangeHandler}></input>
                    <h3>User Name is {this.state.userName}</h3>

                    <h3>City</h3>
                    <input type="text" name="city" onChange={this.onChangeHandler}></input>
                    <h3>City is {this.state.city}</h3>

                    <input type="submit" value="Submit"></input>
                </form>
            </div >
        )
    }
}
