import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div>
                <button> <Link to="/generate-new-report"> New Report </Link></button>
                <button onClick={this.PutReport.bind(this)}> Save Report </button>
                </div>
                
                <p> {this.props.Name} </p>
                <p> {this.props.SunSign} </p>
                <p> {this.props.Chinese} </p>
                <p> {this.props.NameReading} </p>
                <p> {this.props.BirthReading} </p>

            </div>
         )
    }

    PutReport() {

        if (this.props.loggedIn == true) {
            let newReport = {
                user_name: this.props.name,
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
                url: 'http://localhost:5000/users/' + this.props.username,
                data: newReport,
                config: { headers: {'Content-Type': 'application/json' }}
              }).then(response => {
                  console.log(response.data)
              })

              this.props.history.push("/saved-reports");
        }
        else if (this.props.loggedIn == false) {
            alert("You must be logged in to save this report.")
        }
        
    }
}

const mapStateToProps = state => {
    return {
        Name: state.numerology.name,
        SunSign: state.sign,
        Chinese: state.chineseZodiac.result,
        NameReading: state.numerology.namereading,
        BirthReading: state.numerology.birthdatereading,

        username: state.user.username,
        month: state.numerology.month,
        day: state.numerology.day,
        year: state.numerology.year,
        loggedIn: state.loggedIn
    }
}
 
export default connect(mapStateToProps)(Report);