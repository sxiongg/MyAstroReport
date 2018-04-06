import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'

class ViewReports extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        const isLoggedIn = this.props.isLoggedIn;

        return (
            <div>
                {
                    isLoggedIn ? (
                    this.props.user.savedReports.map((item, index) => (
                        <div key={index}>
                            <p> {item.user_Name} </p>
                            <p> { item.dob } </p>
                            <p> {item.zodiac_Sign} </p>
                            <p> { item.name_Number }</p>
                            <p> { item.name_Reading }</p>
                            <p> { item.dob_Number } </p>
                            <p> { item.dob_Reading } </p>
                            <p> { item.chinese_Sign } </p>
                        </div>
                    ))
                ) : (
                    <div> You must be logged in to view your reports. </div>
                )
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.loggedIn,
        user: state.user[0]
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewReports);