import React, { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState('')

   const handleChange = (event) => {
     // console.log("funciona el handle", evento.target.value);
      setId(event.target.value)
      
   };

   return (
      <div className={styles.div}>
         <input 
         className={styles.input} 
         type='search' 
         placeholder="Busca un personaje..." 
         onChange={handleChange}
         value={id}
         />
         <button className={styles.btn} onClick={() =>{onSearch(id); setId('')}}>
            Agregar
         </button>
      </div>
   );
}
