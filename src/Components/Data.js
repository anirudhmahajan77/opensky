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
    let component;
    if(this.state.status === 0){
      component= <p>Loading</p>
    } else if(this.state.status === 200){
      component= <p>Success</p>
    } else {
      component= <p>Error</p>
    }
    return (
      <div>
        <p>{this.state.status} for {this.state.city}</p>
        {component}
      </div>
    )
  }
}

export default Data