import axios from 'axios';
import React, { Component } from 'react'
import LoadingData from "./LoadingData";
import SuccessData from "./SuccessData";
import ErrorData from "./ErrorData";
import styles from "../Style/Data.module.css";

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city,
      status: 0,
      res: {},
    }
  }

  async componentDidMount() {
    await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=634f6921cf574141976104305212906&q=${this.state.city}&days=5&aqi=yes&alerts=no`).then((r) => {
      console.log(r.data)
      this.setState({ status: r.status, res: r })
    }).catch((e) => { this.setState({ status: 400 }) })
  }

  render() {
    let Component =<LoadingData/>;
    if (this.state.status === 0) {
      Component = <LoadingData />
    } else if (this.state.status === 200) {
      Component = <SuccessData info={this.state.res.data} />
    } else {
      Component = <ErrorData />
    }
    return (
      <div className={styles.data}>
        {Component}
      </div>
    )
  }
}

export default Data