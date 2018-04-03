import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Login from './login'
import SignUp from './signup'
import Generator from './Generator'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/sign-up' component={SignUp} />
                    <Route path='/calculate-chart' component={Generator} />
                </Switch>
            </div>
        )
    }
}

export default Container;