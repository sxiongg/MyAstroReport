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
            <div id="view-reports">


                {
                    isLoggedIn ? (
                        this.props.user.savedReports.map((item, index) => (
                            <div key={index} className="saved-report">
                                <table id="view-reports-table" className="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>DOB </th>
                                            <th>Sun Sign</th>
                                            <th>Chinese Zodiac</th>
                                            <th>Name Number</th>
                                            <th>Description</th>
                                            <th>Birthdate Number</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> {item.user_Name} </td>
                                            <td> {item.dob} </td>
                                            <td> {item.zodiac_Sign} </td>
                                            <td> {item.chinese_Sign}</td>
                                            <td> {item.name_Number}</td>
                                            <td> {item.name_Reading} </td>
                                            <td> {item.doB_Number} </td>
                                            <td> {item.doB_Reading} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ))
                    ) : (
                            <div className="login-message text-center"> You must be logged in to view your reports. </div>
                        )
                }


                {/* {
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
                } */}
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