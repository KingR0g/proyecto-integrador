import React from "react";
import styles from "./Card.module.css"

export default function Card({
   name,
   species,
   onClose,
   gender,
   status,
   origin,
   image,
   id,
}) {
//
   return (
      <div className={styles.div}>
         <div>
            <button className={styles.btn} onClick={() => onClose(id)}>
               X
            </button>
            <img className={styles.image} src={image} alt={name} />
            <h4 className={styles.name}>{name}</h4>
         </div>
         <div className={styles.data}>
            <h4>{species}</h4>
            <h4>{gender}</h4>

            {/* <h2>{status}</h2>
            <h2>{origin}</h2> */}
         </div>
      </div>
   );
};
