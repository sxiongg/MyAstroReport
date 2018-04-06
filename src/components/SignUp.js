import React, { Component } from 'react';
import axios from 'axios'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            userName: "",
            password: "",
            verifyPassword: ""
        }
    }

    PostNewUser() {
        const newUser = {
            Username: this.state.userName,
            Password: this.state.password,
            FirstName: this.state.firstName
        }

        axios.get("http://localhost:5000/users/" + this.state.userName)
            .then(response => {
                if (response.status == 204) {
                    if (this.state.password == this.state.verifyPassword) {
                        axios({
                            method: 'post',
                            url: 'http://localhost:5000/users',
                            data: newUser,
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }).then(
                            this.props.history.push("/")
                        )
                    }
                    else {
                        alert("Passwords do not match.");
                    }
                }
                else if (response.status == 200) {
                    alert("Username already exists. Please choose a new username.")
                }
            })
    }

    render() {
        return (
            <div id="sign-up">
            <h2>Registration</h2>
                <div className="form-group">
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input onChange={event => { this.setState({ firstName: event.target.value }) }} value={this.state.firstName} type="text" id="firstName" className="form-control"/>
                    </div>
                    <div>
                        <label htmlFor="userName">Username</label>
                        <input onChange={event => { this.setState({ userName: event.target.value }) }} value={this.state.userName} type="text" id="userName" className="form-control"/>
                    </div>
                    <div>
                        <label htmlFor="passWord">Password</label>
                        <input onChange={event => { this.setState({ password: event.target.value }) }} value={this.state.password} type="password" id="passWord" className="form-control"/>
                    </div>
                    <div>
                        <label htmlFor="verifyPassWord">Verify Password</label>
                        <input onChange={event => { this.setState({ verifyPassword: event.target.value }) }} value={this.state.verifyPassword} type="password" id="verifyPassWord" className="form-control"/>
                    </div>
                    <button onClick={this.PostNewUser.bind(this)} className="btn btn-primary btn-block">Create Account</button>
                </div>
            </div>
        )
    }
}

export default SignUp;