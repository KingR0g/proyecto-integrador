import React from "react";
import styles from "./Card.module.css"

export default function Card(props) {
   console.log(props, "props")
   return (
      <div className={styles.div}>
         <div>
            <button className={styles.btn} onClick={props.onClose}>X</button>
            <img className={styles.image} src={props.image} alt={props.name} />
            <h4 className={styles.name}>{props.name}</h4>
         </div>
         <div className={styles.data}>
            <h4>{props.species}</h4>
            <h4>{props.gender}</h4>

{/*             <h2>{props.status}</h2>
            <h2>{props.origin}</h2> */}
         </div>
      </div>
   );
};
