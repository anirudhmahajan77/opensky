import React, { useState, useEffect } from 'react'
import styles from "../Style/History.module.css"
import { useNavigate } from 'react-router-dom';
import { FiClock, FiCompass } from "react-icons/fi";


const History = () => {

  let [cities, setCities] = useState(['Italy', 'Goa', 'Venice']);
  let [res, setRes] = useState(true);
  const navigate = useNavigate();

  const searchCity = (city) => {
    navigate('/weather/' + city);
  }
  useEffect(() => {
    let data = JSON.parse(window.localStorage.getItem('cities'));
    if (data !== null) {
      setCities(data);
    } else {
      setRes(false)
    }
  }, [])

  return (
    <div className={styles.history}>{
      cities.map((city,index) => {
        return (
          city.length !== 0 ? <div key={index} className={styles.city} onClick={() => searchCity(city)}>
            {res ? <FiClock className={styles.icon} /> : <FiCompass className={styles.icon}/>}{city}
          </div> : null
        )
      })
    }</div>
  )
}

export default History