import React from "react";
import styles from "./Card.module.css"
import { Link } from 'react-router-dom'

export default function Card({
   name,
   species,
   gender,
   status,
   origin,
   image,
   id,
   onClose,
}) {
//
   return (
      <div className={styles.div}>
         <div>
            <button onClick={() => onClose(id)}>
               X
            </button>
            <img className={styles.image} src={image} alt={name} />
            <Link to={`/detail/${id}`} >
               <h1 className={styles.name}>{name}</h1>
            </Link>
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
