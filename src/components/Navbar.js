import React from 'react'
import styles from './style.module.css';

const Navbar = (props) => {
    const {count, handleDisplay, handleCart } = props;
    return (
        <div className={styles.navbar}>
            <div className={styles.details} >
                <div className={styles.detail}><p onClick={ () => handleDisplay(false) } style={{cursor:"pointer"}} >eCommerce</p></div>
                <div className={styles.detail}><p onClick={ () => handleCart() } style={{cursor:"pointer"}} >Cart {count}</p></div>
                <div className={styles.detail}><p onClick={ () => handleDisplay(true) } style={{cursor:"pointer"}}>Add A Product</p></div>
            </div>
            <div className={styles.logo}></div>
        </div>
    )
}

export default Navbar;
