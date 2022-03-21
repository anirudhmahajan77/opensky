import { React } from "react";
import styles from "../Style/Home.module.css";
import logo from "../Asset/opensky.svg";
import History from "./History.js";
import SearchBar from "./SearchBar";
import umb from "../Asset/umb.png";
import earth from "../Asset/earth.png";
import baloon from "../Asset/baloon.png";
import cloud from "../Asset/cloud.png";
import plane from "../Asset/plane.png";
import sun from "../Asset/sun.png";
import star from "../Asset/star.png";
import moon from "../Asset/moon.png";


const Home = () => {

    return (
        <div className={styles.home}>
            <div className={`${styles.backdrop} ${styles.umb}`} data-img-url={umb}></div>
            <div className={`${styles.backdrop} ${styles.earth}`} data-img-url={earth}></div>
            <div className={`${styles.backdrop} ${styles.moon}`} data-img-url={moon}></div>
            <div className={`${styles.backdrop} ${styles.cloud}`} data-img-url={cloud}></div>
            <div className={`${styles.backdrop} ${styles.sun}`} data-img-url={sun}></div>
            <div className={`${styles.backdrop} ${styles.baloon}`} data-img-url={baloon}></div>
            <div className={`${styles.backdrop} ${styles.plane}`} data-img-url={plane}></div>
            <div className={`${styles.backdrop} ${styles.star}`} data-img-url={star}></div>
            <div className={styles.glass}>
                <div className={styles.content}>
                    <div className={styles.logo} data-img-url={logo}></div>
                    <div className={styles.searchBar}>
                        <div className={styles.fix}>
                        <SearchBar />
                        </div>
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