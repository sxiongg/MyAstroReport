import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Title from './title'
import Login from './login'
import SignUp from './signup'
import Generator from './Generator'
import Navigation from './nav'
import Report from './report'
import ViewReports from './view-reports';


class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Title />
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/sign-up' component={SignUp} />
                    <Route path='/generate-new-report' component={Generator} />
                    <Route path='/saved-reports' component={ViewReports} />
                    <Route path='/report' component={Report} />

                </Switch>
            </div>
        )
    }
}

export default Container;