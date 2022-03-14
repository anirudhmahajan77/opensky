import {React, useState} from "react";
import "../Style/Home.css";
import logo from "../Asset/opensky.svg";
import { FiMic, FiSearch, FiX } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    let [city,setCity]= useState("");
    function updateLocation(e){
        setCity(e.target.value);
    }

    function searchCity(e){
        navigate('/weather/'+city);
    }

    return (
        <div className="home">
            <div className="design">
            </div>
            <div className="glass">
                <div className="content">
                    <div className="logo" data-img-url={logo}></div>
                    <div className="searchBar">
                        <div className="s">
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
                                className="searchInput" />
                            {city.length > 0 ?
                                <FiX onClick={() => { setCity("")}} className="clear" />
                                : <p className="clear"></p>}
                        </div>
                        <div className="mic">
                            <FiMic />
                        </div>
                        <div className="search"
                            onClick={searchCity}>
                            <FiSearch />
                        </div>
                    </div>
                </div>
                <div className="credit">
                    <p >Made with <p className="heart">♥️</p> by <a rel="noreferrer" href="https://anirudhmahajan.me/" target="_blank">Anirudh Mahajan</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;