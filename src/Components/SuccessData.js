import React, { Component } from 'react'
import styles from "../Style/Success.module.css";
import Sunny from "../Asset/Weather/sunny1000.png";
import Clear from "../Asset/Weather/clear1000.png";
import Cloudy from "../Asset/Weather/cloudy1006_1009_1135.png";
import CloudyNight from "../Asset/Weather/partialcloudy.png";
import Drizzle from "../Asset/Weather/drizzle_1072_1216_1219_1222_1225_1237_1258.png";
import Heavy from "../Asset/Weather/heavy_1276.png";
import HeavySnow from "../Asset/Weather/heavysnow_1283.png";
import LightRain from "../Asset/Weather/light_rain_1063_1183_1150_1153_1180_1189_1240_1243_1246.png";
import Lightning from "../Asset/Weather/lightning_1087.png";
import Light from "../Asset/Weather/lightrain_1183_1186.png";
import LightSnow from "../Asset/Weather/lightsnow_1066_1114_1117_1147_1168_1171_1210_1255_1264.png";
import Mist from "../Asset/Weather/mist_1030_1192_1189.png";
import Partial from "../Asset/Weather/partial1003.png";
import Sleet from "../Asset/Weather/sleet_1069_1198_1201_1204_1207_1249_1252.png";
import SnowThunder from "../Asset/Weather/snowthunder_1279.png"
import Thunder from "../Asset/Weather/thunder_1273.png";



class SuccessData extends Component {

  setImage = (code, text, isDay) => {
    
    if(code === 1000){
      if(text === "Sunny"){
        return Sunny;
      } else {
        return Clear;
      }
    }
    else if(code === 1006 || code === 1009 || code === 1135){
      if(isDay === 1){
        return Cloudy;
      } else{
        return CloudyNight;
      }
    }
    else if(code === 1072 || code === 1216 || code === 1219 || code === 1222 || code === 1225 || code === 1237 || code === 1258){
      return Drizzle;
    }
    else if(code === 1276){
      return Heavy;
    }
    else if(code === 1283){
      return HeavySnow;
    }
    else if(code === 1063 || code === 1183 || code === 1150 || code === 1153 || code === 1180 || code === 1189 || code === 1240 || code === 1243 || code === 1246){
      return LightRain;
    }
    else if(code === 1087){
      return Lightning;
    }
    else if(code === 1183 || code === 1186){
      return Light;
    }
    else if(code === 1066 || code === 1114 || code === 1117 || code === 1147 || code === 1168 || code === 1171 || code === 1210 || code === 1255 || code === 1264){
      return LightSnow;
    }
    else if (code === 1030 || code === 1192 || code === 1189){
      return Mist;
    }
    else if(code === 1003){
      return Partial;
    }
    else if(code === 1069 || code === 1198 || code === 1201 || code === 1204 || code === 1207 || code === 1249 || code === 1252){
      return Sleet;
    }
    else if(code === 1279){
      return SnowThunder;
    }
    else if(code === 1273){
      return Thunder;
    } else{
      return Sunny;
    }
  }

  render() {
    let currentImage;
    let tomorrowImage;
    let dayAfterTomorrowImage;

    currentImage = this.setImage(this.props.info.current.condition.code,
      this.props.info.current.condition.text,
      this.props.info.current.is_day);
    tomorrowImage = this.setImage(this.props.info.forecast.forecastday[1].day.condition.code,
      this.props.info.forecast.forecastday[1].day.condition.text,
      1);
    dayAfterTomorrowImage = this.setImage(this.props.info.forecast.forecastday[2].day.condition.code,
      this.props.info.forecast.forecastday[2].day.condition.text,
      1);
    
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.address}>
            {this.props.info.location.name},&nbsp;{this.props.info.location.region},&nbsp;{this.props.info.location.country}
            &nbsp; ({this.props.info.location.tz_id})
          </div>
          <img src={currentImage} className={styles.icon} alt="t" />
          <div className={styles.forecastWrapper}>
            <div className={styles.forecast}>
              <div className={styles.forecastleft}>
              <p>{this.props.info.forecast.forecastday[1].date}</p>
              <img src={tomorrowImage} className={styles.foreicon} alt="t" />
              <p>{this.props.info.forecast.forecastday[1].day.condition.text}</p>
              </div>
              <div className={styles.forecastright}>
                  <p className={styles.fix}>Temp:&nbsp;{this.props.info.forecast.forecastday[1].day.avgtemp_c}&deg;</p>
                  <p className={styles.fix}>Humidity:&nbsp;{this.props.info.forecast.forecastday[1].day.avghumidity}</p>
                  <p className={styles.fix}>UV:&nbsp;{this.props.info.forecast.forecastday[1].day.uv}</p>
                  <p className={styles.fix}>Sunrise:&nbsp;{this.props.info.forecast.forecastday[1].astro.sunrise}</p>
              </div>
            </div>
            <div className={styles.forecast}>
              <div className={styles.forecastleft}>
              <p>{this.props.info.forecast.forecastday[2].date}</p>
              <img src={dayAfterTomorrowImage} className={styles.foreicon} alt="t" />
              <p>{this.props.info.forecast.forecastday[2].day.condition.text}</p>
              </div>
              <div className={styles.forecastright}>
                  <p className={styles.fix}>Temp:&nbsp;{this.props.info.forecast.forecastday[2].day.avgtemp_c}&deg;</p>
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
            <p className={styles.topic}>Sulphur dioxide (μg/m3):&nbsp;{this.props.info.current.air_quality.so2.toFixed(2)}</p>
            <p className={styles.topic}>Ozone (μg/m3):&nbsp;{this.props.info.current.air_quality.o3.toFixed(2)}</p>
            <p className={styles.topic}>PM2.5 (μg/m3):&nbsp;{this.props.info.current.air_quality.pm2_5.toFixed(2)}</p>
            <p className={styles.topic}>Carbon Monoxide (μg/m3):&nbsp;{this.props.info.current.air_quality.co.toFixed(2)}</p>
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