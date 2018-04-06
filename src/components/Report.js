import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { updateUserState } from '../redux/actions'

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    PutReport() {
        if (this.props.loggedIn == true) {
            let newReport = {
                user_name: this.props.Name,
                dob: this.props.month + "/" + this.props.day + "/" + this.props.year,
                zodiac_sign: this.props.SunSign,
                chinese_sign: this.props.Chinese,
                name_number: this.props.NameReading.charAt(19),
                name_reading: this.props.NameReading,
                dob_number: this.props.BirthReading.charAt(24),
                dob_reading: this.props.BirthReading
            }

            axios({
                method: 'put',
                url: 'http://localhost:5000/users/' + this.props.user[0].username,
                data: newReport,
                config: { headers: { 'Content-Type': 'application/json' } }
            }).then(response => {
                console.log("Report saved to databse.");
                this.props.updateUserState(response.data)
            })
            alert("Report saved.")
        }
        else {
            alert("You must be logged in to save this report.")
        }
    }

    render() {
        return (
            <div id="new-report">
                <div id="report-buttons">
                    <button className="btn new-report-btn"> <Link to="/generate-new-report"> New Report </Link></button>
                    <button className="btn btn-primary pull-right" onClick={this.PutReport.bind(this)}> Save Report </button>
                </div>
                <div id="report-div">
                    <p className="text-center name-tag"> {this.props.Name} </p>
                    <p> Sun Sign: {this.props.SunSign} </p>
                    <p> Chinese Zodiac: {this.props.Chinese} </p>
                    <p> {this.props.NameReading} </p>
                    <p> {this.props.BirthReading} </p>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        Name: state.numerology.name,
        SunSign: state.sign,
        Chinese: state.chineseZodiac.result,
        NameReading: state.numerology.namereading,
        BirthReading: state.numerology.birthdatereading,

        user: state.user,
        month: state.numerology.month,
        day: state.numerology.day,
        year: state.numerology.year,
        loggedIn: state.loggedIn,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUserState: response => dispatch(updateUserState(response))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Report);