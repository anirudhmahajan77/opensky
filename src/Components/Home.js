import React from "react";
import styles from "../Style/Home.module.css";
import logo from "../Asset/opensky.svg";
import { FiMic, FiSearch, FiX } from "react-icons/fi";

class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            city: "",
        }
    }

    updateLocation = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    searchCity = (e) => {
        
        alert(this.state.city)
    }

    render() {
        return (
            <div className={styles.home}>
                <div className={styles.design}>
                </div>
                <div className={styles.glass}>
                    <div className={styles.content}>
                        <div className={styles.logo} data-img-url={logo}></div>
                        <div className={styles.searchBar}>
                            <div className={styles.s}>
                            <input
                                type="text"
                                value={this.state.city}
                                placeholder={`Search Any Location Eg."Jammu"`}
                                onChange={this.updateLocation}
                                onKeyPress={(e)=>{
                                    if(e.key === 'Enter'){
                                        this.searchCity()
                                    }
                                }}
                                className={styles.searchInput} />
                                {this.state.city.length > 0 ? 
                                    <FiX onClick={()=>{this.setState({city:""})}} className={styles.clear}/>
                                    : <p className={styles.clear}></p>}
                            </div>
                            <div className={styles.mic}>
                                <FiMic />
                            </div>
                            <div className={styles.search}
                            onClick={this.searchCity}>
                                <FiSearch />
                            </div>
                        </div>
                    </div>
                    <div className={styles.credit}>
                        <p >Made with <p className={styles.heart}>♥️</p> by <a rel="noreferrer" href="https://anirudhmahajan.me/" target="_blank">Anirudh Mahajan</a>.</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;