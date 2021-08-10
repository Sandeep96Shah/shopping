import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './style.module.css';

const Sort = ({sort, display, handleSort}) => {
    return (
        <div className={`${styles.sort} ${!display ? styles.show : styles.dontshow}`}>
          <h2 onClick={ () => handleSort(true) } className={`${styles.sort_h2} ${sort ? styles.bg_red : styles.bg_blue} `} >Sort</h2>
          <h2 onClick={ () => handleSort(false) } className={`${sort ? styles.show : styles.dontshow}`} style={{cursor:"pointer"}}><FaTimes color="red" fontSize="30px" /></h2>
        </div>
    )
}

export default Sort;
