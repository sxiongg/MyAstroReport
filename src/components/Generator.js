import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { numerologyResponse } from '../redux/actions'
import { chineseZodiacResponse } from '../redux/actions'
import { sunSign } from '../redux/actions'

class Generator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            day: "",
            month: "",
            year: ""
        }
    }

    HttpCalls() {
        axios.get("http://localhost:5000/chinese-zodiac?year=" + this.state.year + "&month=" + this.state.month + "&day=" + this.state.day)
            .then(response => {
                this.props.sendFirstApiToRedux(response.data)
            })

        var name = this.state.name;
        name.replace(/ /g, "%");
        axios.get("http://localhost:5000/numerology?name=" + name + "&year=" + this.state.year + "&month=" + this.state.month + "&day=" + this.state.day)
            .then(response => {
                this.props.sendSecondApiToRedux(response.data)
            })

        axios.get("http://localhost:5000/signs?monthNumber=" + this.state.month + "&dayNumber=" + this.state.day)
            .then(response => {
                this.props.sendSignToRedux(response.data)
            })

        this.props.history.push("/report");
    }
    
    render() {
        return (
            <div>
                <div className="form-group">
                    <div>
                        <p> Full Name </p>
                    </div>
                    <div>
                        <input onChange={e => this.setState({ name: e.target.value })} value={this.state.name} type="text" id-="nameInput" />
                    </div>
                    <div>
                        <p> Date of Birth </p>
                    </div>
                    <div>
                        <label htmlFor="monthInput">Month</label>
                        <select onChange={e => this.setState({ month: e.target.value })} value={this.state.month} id="monthInput">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>

                        <label htmlFor="dayInput">Day</label>
                        <select onChange={e => this.setState({ day: e.target.value })} value={this.state.day} id="dayInput">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>

                        <label htmlFor="yearInput">Year</label>
                        <input onChange={e => this.setState({ year: e.target.value })} value={this.state.year} id="yearInput" type="text" placeholder="YYYY" />
                    </div>
                </div>
                <button onClick={this.HttpCalls.bind(this)}>Get New Chart</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendFirstApiToRedux: response => dispatch(chineseZodiacResponse(response)),
        sendSecondApiToRedux: response => dispatch(numerologyResponse(response)),
        sendSignToRedux: response => dispatch(sunSign(response))
    }
}

export default connect(null, mapDispatchToProps)(Generator);