import React from 'react';
import styles from './details.module.css';

const ProductDetails = ( {Poster, Title, Price, Rating, Description, handleDetail }) => {
    return (
        <div className={styles.detail_container}>
            <h2 className={styles.detail_container_h2} onClick={() => handleDetail(false)} >Cancel</h2>
            <div className={styles.poster}>
                <div className={styles.posterImage}>
                    <img  src={Poster} alt="Poster"/>
                </div>
                <div className={styles.posterTitle}>
                    <div><h2>{Title}</h2></div>
                    <div><h3>Price : {Price}</h3></div>
                    <div><h4>Rating : {Rating}</h4></div>
                </div>
            </div>
            <div className={styles.description}>
                <h4>{Description}</h4>
            </div>
        </div>
    )
}
export default ProductDetails;
