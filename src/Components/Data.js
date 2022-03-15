import axios from 'axios';
import React, { Component } from 'react'

class Data extends Component {
  constructor(props) {
    super(props);
    this.state={
      city: this.props.city,
      status:0,
    }
  }

  async componentDidMount(){
    await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=634f6921cf574141976104305212906&q=${this.state.city}&days=5&aqi=yes&alerts=no`).then((r) => {
    console.log(r.status)  
    this.setState({status:r.status})}).catch((e) => {this.setState({status:400})})
  }

  render() {
    return (
      <div><p>{this.state.status} for {this.state.city}</p></div>
    )
  }
}

export default Data