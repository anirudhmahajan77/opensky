import React from 'react'
import logo from "../Asset/opensky.svg";
import styles from "../Style/Header.module.css";
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.content}>
          <Link
            to={{
              pathname: "/"
            }}
          ><div className={styles.logo} data-img-url={logo}></div></Link>
          <div className={styles.search}>
            <SearchBar city={this.props.city} />
          </div>
        </div>
        <div className={styles.credit}><p >Powered By <a href="https://www.weatherapi.com/" rel="noreferrer" title="Weather API" target="_blank">WeatherAPI</a>.</p></div>
      </div>
    )
  }
}

export default Header