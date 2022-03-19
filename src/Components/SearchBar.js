import React, { useState } from 'react'
import { FiMic, FiSearch, FiX } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import styles from "../Style/SearchBar.module.css"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert severity="error" elevation={6} ref={ref} variant="filled" {...props} sx={{ width: '100%', color:"white",}}/>;
});

const SearchBar = () => {

    let [city, setCity] = useState("");
    let [helper, setHelper] = useState(false);
    const navigate = useNavigate();

    const updateLocation = (e) => {
        setCity(e.target.value)
    }

    const searchCity = () => {
        if (city.length !== 0) {
            setHelper(false)
            navigate('/weather/' + city);
            let cities = JSON.parse(window.localStorage.getItem('cities'));
            if (cities === null) {
                let ct = [];
                ct.push(city);
                window.localStorage.setItem('cities', JSON.stringify(ct));
                console.log(ct)
            } else {
                if (!cities.includes(city)) {
                    if (cities.length === 3) {
                        cities.pop();
                    }
                    cities.unshift(city);
                    window.localStorage.setItem('cities', JSON.stringify(cities));
                    console.log(cities)
                }
            }
        } else {
            setHelper(true)
        }
    }

    return (
        <div className={styles.container}>
            {helper ? 
            <Snackbar className={styles.helper} open={helper} autoHideDuration={5000} onClose={()=>{setHelper(false)}}>
            <Alert onClose={()=>{setHelper(false)}} >
              Please Enter City Name!
            </Alert>
          </Snackbar>
            : null}
            <div className={styles.s}>
                <input
                    type="text"
                    value={city}
                    placeholder={`Search Any Location Eg."Jammu"`}
                    onChange={updateLocation}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            searchCity()
                        }
                    }}
                    className={styles.searchInput} />
                {city.length > 0 ?
                    <FiX onClick={() => { setCity('') }} className={styles.clear} />
                    : <p className={styles.clear}></p>}
                <div className={styles.mic}>
                    <FiMic />
                </div>
                <div className={styles.search}
                    onClick={searchCity}>
                    <FiSearch />
                </div>
            </div>

        </div>
    )
}

export default SearchBar