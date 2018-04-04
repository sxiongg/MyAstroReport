import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Login from './login'
import SignUp from './signup'
import Generator from './Generator'
import ViewCharts from './view-charts'
import Navigation from './nav'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/sign-up' component={SignUp} />
                    <Route path='/generate-new-chart' component={Generator} />
                    <Route path='/your-saved-charts' component={ViewCharts} />
                </Switch>
            </div>
        )
    }
}

export default Container;