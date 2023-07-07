import React, { useState } from "react";
import style from "./App.module.css"
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/NavBar/Nav.jsx';
import axios from "axios"
//aqui

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

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
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

   const [characters, setCharacters] = useState([]);     // [{}]  ---> [{}, {}]                

   return (
      <div className={style.app}>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} />
      </div>
   );
}

export default App;
