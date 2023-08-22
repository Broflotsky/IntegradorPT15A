import { useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import axios from 'axios'
// import SearchBar from "./components/SearchBar/SearchBar.jsx";
// import characters from "./data.js";


function App() {
  const [characters, setCharacters] = useState([])

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
 }

 const onClose = (id) => {
  setCharacters(
    characters.filter((char) => {
      return char.id !== Number(id)
    })
  )
 }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />

    </div>
  );
}

export default App;
