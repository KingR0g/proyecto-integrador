import React, { useState } from "react";
import style from "./App.module.css"
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/NavBar/Nav.jsx';
import axios from "axios";
import {Routes, Route, useLocation} from 'react-router-dom';
import About from './components/About/About.jsx'
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx"


function App() {

   const location = useLocation()
   const [characters, setCharacters] = useState([]);    
   
   const onSearch = (id) =>  {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }


   const onClose = (id) => {
      const charatersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charatersFiltered)
   };

   return (
      <div className={style.app}>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} />
         }


         <Routes>
            <Route path="/" element={<Form/>} />
            <Route path="/home" element={<Cards characters={characters} onCLose={onClose} />} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail/>} />
         </Routes>
      </div>
   )
};

export default App;

