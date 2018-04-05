import React, { Component } from 'react';
import { connect } from 'react-redux'

class ViewReports extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const isLoggedIn = this.props.loggedIn;
        const reports = this.props.reports
        return ( 
            <div>
                {isLoggedIn ? (
                    
                )}
            </div>
         )
    }
}
 
const mapStateToProps = state => {
    return {
       loggedIn: state.loggedIn,
       reports: state.userReports
    }
}
 
export default connect(mapStateToProps)(ViewReports);