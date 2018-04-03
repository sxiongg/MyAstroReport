import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <ul className="nav nav-pills nav-justified">
                    <li className="active"><a href="#">Home</a></li>
                    <li><Link to="/sign-up"> Menu 1 </Link> </li>
                    <li><a href="#">Menu 2</a></li>
                    <li><a href="#">Menu 3</a></li>
                </ul>
            </div>
        )
    }
}

export default Navigation;