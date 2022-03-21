import React, { Component } from 'react'
import styles from "../Style/Success.module.css";
import sunny from "../Asset/Weather/sunny.png";

class SuccessData extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.address}>
            {this.props.info.location.name},&nbsp;{this.props.info.location.region},&nbsp;{this.props.info.location.country}
            &nbsp; ({this.props.info.location.tz_id})
          </div>
          <img src={sunny} className={styles.icon} alt="t" />
          <div className={styles.forecastWrapper}>
            <div className={styles.forecast}>
              <div className={styles.forecastleft}>
              <p>{this.props.info.forecast.forecastday[1].date}</p>
              <img src={sunny} className={styles.foreicon} alt="t" />
              <p>{this.props.info.forecast.forecastday[1].day.condition.text}</p>
              </div>
              <div className={styles.forecastright}>
                  <p className={styles.fix}>Avg. Temp:&nbsp;{this.props.info.forecast.forecastday[1].day.avgtemp_c}&deg;</p>
                  <p className={styles.fix}>Humidity:&nbsp;{this.props.info.forecast.forecastday[1].day.avghumidity}</p>
                  <p className={styles.fix}>UV:&nbsp;{this.props.info.forecast.forecastday[1].day.uv}</p>
                  <p className={styles.fix}>Sunrise:&nbsp;{this.props.info.forecast.forecastday[1].astro.sunrise}</p>
              </div>
            </div>
            <div className={styles.forecast}>
              <div className={styles.forecastleft}>
              <p>{this.props.info.forecast.forecastday[2].date}</p>
              <img src={sunny} className={styles.foreicon} alt="t" />
              <p>{this.props.info.forecast.forecastday[2].day.condition.text}</p>
              </div>
              <div className={styles.forecastright}>
                  <p className={styles.fix}>Avg. Temp:&nbsp;{this.props.info.forecast.forecastday[2].day.avgtemp_c}&deg;</p>
                  <p className={styles.fix}>Humidity:&nbsp;{this.props.info.forecast.forecastday[2].day.avghumidity}</p>
                  <p className={styles.fix}>UV:&nbsp;{this.props.info.forecast.forecastday[2].day.uv}</p>
                  <p className={styles.fix}>Sunrise:&nbsp;{this.props.info.forecast.forecastday[2].astro.sunrise}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.current}>
            <p className={styles.heading}>Weather Condition</p>
            <p className={styles.topic}>Temperature:&nbsp;{this.props.info.current.temp_c}&deg;</p>
            <p className={styles.topic}>Localtime:&nbsp;{this.props.info.location.localtime}</p>
            <p className={styles.topic}>Visibility:&nbsp;{this.props.info.current.vis_km}</p>
            <p className={styles.topic}>Humidity:&nbsp;{this.props.info.current.humidity}</p>
            <p className={styles.topic}>UV:&nbsp;{this.props.info.current.uv}</p>
          </div>
          <div className={styles.current}>
            <p className={styles.heading}>Air Quality Index</p>
            <p className={styles.topic}>Sulphur dioxide (μg/m3):&nbsp;{this.props.info.current.air_quality.so2}</p>
            <p className={styles.topic}>Ozone (μg/m3):&nbsp;{this.props.info.current.air_quality.o3}</p>
            <p className={styles.topic}>PM2.5 (μg/m3):&nbsp;{this.props.info.current.air_quality.pm2_5}</p>
            <p className={styles.topic}>Carbon Monoxide (μg/m3):&nbsp;{this.props.info.current.air_quality.co}</p>
          </div>
          <div className={styles.current}>
            <p className={styles.heading}>Astronomy</p>
            <p className={styles.topic}>Sunrise:&nbsp;{this.props.info.forecast.forecastday[0].astro.sunrise}</p>
            <p className={styles.topic}>Sunset:&nbsp;{this.props.info.forecast.forecastday[0].astro.sunset}</p>
            <p className={styles.topic}>Moonrise:&nbsp;{this.props.info.forecast.forecastday[0].astro.moonrise}</p>
            <p className={styles.topic}>Moonset:&nbsp;{this.props.info.forecast.forecastday[0].astro.moonset}</p>
          </div>
        </div>
        
      </div>
    )
  }
}

export default SuccessData