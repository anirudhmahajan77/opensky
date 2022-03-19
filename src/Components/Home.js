import { React } from "react";
import styles from "../Style/Home.module.css";
import logo from "../Asset/opensky.svg";
import History from "./History.js";
import SearchBar from "./SearchBar";

const Home = () => {

    return (
        <div className={styles.home}>
            <div className={styles.glass}>
                <div className={styles.content}>
                    <div className={styles.logo} data-img-url={logo}></div>
                    <div className={styles.searchBar}>
                        <SearchBar/>
                        <History />
                    </div>
                </div>
                <div className={styles.credit}>
                    <div className={styles.info} >Made with <p className={styles.heart}>♥️</p> by <a rel="noreferrer" href="https://anirudhmahajan.me/" target="_blank">Anirudh Mahajan</a>.</div>
                </div>
            </div>
        </div>
    );
}

export default Home;