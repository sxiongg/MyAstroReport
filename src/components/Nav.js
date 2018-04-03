import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <ul className="nav nav-pills nav-justified">
                    <li> <Link to="/"> Home </Link></li>
                    <li> <Link to="/calculate-chart"> Generate Chart </Link></li>
                    <li> <Link to="/your-saved-charts"> Your Charts </Link></li>
                    <li><Link to="/sign-up"> Create Account </Link></li>
                </ul>
            </div>
        )
    }
}

export default Navigation;