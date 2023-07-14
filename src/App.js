import React, { useState } from "react";
import style from "./App.module.css"
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/NavBar/Nav.jsx';
import axios from "axios"
//aqui



function App() {

//   var characters = [] ASI NO ,  como  estado

//   const array = React.useState([]);        // que retorna esta function cuando la invoco? --> [1, 2,]
//   const state =  array[0]
//   const setState = array[1]

function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
      }
   })
      .catch((err) => window.alert('¡No hay personajes con este ID!'));
}

function onClose(id) {
   // elimina personajes de characters
 //window.alert("onClose :)")
      setCharacters(characters.filter(pj => {
         return pj.id !== id
      }))
}

   const [characters, setCharacters] = useState([]);     // [{}]  ---> [{}, {}]                

   return (
      <div className={style.app}>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;



// lo que tenemos con axios pero con fetch

/* fetch(`https://rickandmortyapi.com/api/character/${id}`)
.then(respuesta => respuesta.json())
.then(({ respuestaJson }) => {
   if (respuestaJson.data.name) {
      setCharacters((oldChars) => [...oldChars, respuestaJson.data]);
   } else {
   }
})
   .catch((err) => window.alert('¡No hay personajes con este ID!'));
 */