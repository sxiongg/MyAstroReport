import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { changeStateToFalse } from '../redux/actions'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    setToFalse() {
        this.props.setLoggedInToFalse(false);
    }

    render() {

        const isLoggedIn = this.props.isLoggedIn;
        // const user = this.props.user;

        return (
            <div id="navigation">
                <ul className="nav nav-pills nav-justified">
                    <li> {isLoggedIn ?
                        (
                            <p className="greeting"> Welcome, {this.props.user[0].firstName}! </p>
                        ) :
                        (
                            <Link to="/"> LogIn </Link>
                        )}
                    </li>
                    <li> <Link to="/generate-new-report"> Generate Report </Link></li>
                    <li> <Link to="/saved-reports"> Your Reports </Link></li>
                    <li>
                        {isLoggedIn ? (
                            <Link to="/" onClick={this.setToFalse.bind(this)}> Log Out </Link>
                        ) : (
                                <Link to="/sign-up"> Create Account </Link>
                            )}
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.loggedIn,
        user: state.user,
        username: state.user.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLoggedInToFalse: bool => dispatch(changeStateToFalse(bool)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);