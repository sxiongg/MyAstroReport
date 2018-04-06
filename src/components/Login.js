import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import axios from 'axios'
import { changeLoggedInState } from '../redux/actions'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        }
    }

    Validation() {
        if (this.state.userName == "" || this.state.password == "") {
            alert("Please enter your login information.");
        }
        else {
            axios.get("http://localhost:5000/users/" + this.state.userName)
                .then(response => {
                    if (response.status == 204) {
                        alert("Username does not exist.");
                    }
                    else if (response.data.password == this.state.password) {
                        this.props.history.push("/generate-new-report");
                        let userInfo = [response.data];
                        this.props.loggedIn(userInfo);
                    }
                    else {
                        alert("Incorrect Password!");
                    }
                })
        }
    }

    render() {
        return (
            <div className="form-group">
                <div>
                    <label htmlFor="usernameInput">Username</label>
                    <input onChange={event => { this.setState({ userName: event.target.value }) }} value={this.state.userName} type="text" id="usernameInput" />
                </div>
                <div>
                    <label htmlFor="passwordInput">Password</label>
                    <input onChange={event => { this.setState({ password: event.target.value }) }} value={this.state.password} type="password" id="passwordInput" />
                </div>
                <button onClick={this.Validation.bind(this)}>Login</button>
                <button><Link to="/sign-up"> Sign Up </Link></button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loggedIn: response => dispatch(changeLoggedInState(response))
    }
}

export default connect(null, mapDispatchToProps)(Login);