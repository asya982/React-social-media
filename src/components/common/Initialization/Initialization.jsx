import React from "react";
import logo from "../../../assets/images/icon.png";
import styles from "./Initialization.module.css";

const Initialization = () => {
    return (
        <div className={styles.initialization}>
        <img src={logo} alt="logo" />
        </div>
    );
};

export default Initialization;