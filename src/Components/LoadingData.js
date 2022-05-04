import React, { Component } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import styles from "../Style/Loading.module.css";

class LoadingData extends Component {
  render() {
    return (
      <div className={styles.loader}>
        <CircularProgress disableShrink />
      </div>
    )
  }
}

export default LoadingData