import React from 'react';
import styles from "../Style/Error.module.css";
import man from "../Asset/man.svg";
import { useNavigate } from 'react-router-dom';


const ErrorData = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  }

    return (
      <div className={styles.container}>
        <div className={styles.svg} data-img-url={man}></div>
        <div>
          <h3 className={styles.headline}>Opps! It's a 404</h3>
          <h5 className={styles.message}>Looks like we cannot find this place.<br />Try Searching some other location!</h5>
          <div onClick={goHome} className={styles.action}>Go Back</div>
        </div>
      </div >
    )
}

export default ErrorData