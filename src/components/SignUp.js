import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" />

                    <label htmlFor="userName">Username</label>
                    <input type="text" id="userName" />

                    <label htmlFor="passWord">Password</label>
                    <input type="text" id="passWord" />

                    <button>Create Account</button>
                </div>
            </div>
        )
    }
}

export default SignUp;