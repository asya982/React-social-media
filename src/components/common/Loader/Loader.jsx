import React from 'react';
import styles from './Loader.module.css';
import loader from '../../../assets/images/loader.png'

const Loader = () => (
  <div className={styles.Loader}>
    <img src={loader} alt="loader" className={styles.spinner} />
    <p>Loading...</p>
  </div>
);

export default Loader;
