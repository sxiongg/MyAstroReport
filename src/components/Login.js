import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {withRouter} from "react-router-dom";
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: "",
            Password: ""
        }
    }

    Validation() {
        if (this.state.Username == "" || this.state.Password == "") {
            alert("Please enter your login information.");
        }
        else {
            axios.get("http://localhost:5000/users/" + this.state.Username)
            .then(response => {
                if(response.data.password == this.state.Password) {
                    this.props.history.push("/calculate-chart");
                    console.log(response.data);
                }
                else {
                    console.log("Incorrect Password!");
                }
            })
            .catch(error => {
                console.log("Username does not exist." + error);
            })
        }
    }

    render() {
        return (
            <div className="form-group">
                <div>
                    <label htmlFor="usernameInput">Username</label>
                    <input onChange={event => {this.setState({Username: event.target.value})}} value={this.state.Username} type="text" id="usernameInput" />
                </div>

                <div>
                    <label htmlFor="passwordInput">Password</label>
                    <input onChange={event => {this.setState({Password: event.target.value})}} value={this.state.Password} type="password" id="passwordInput" />
                </div>

                 <button onClick={this.Validation.bind(this)}>Login</button>

                <Link to="/sign-up"> <button>Sign Up</button> </Link>
            </div>
        )
    }
}

export default Login;