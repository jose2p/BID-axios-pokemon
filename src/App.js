import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [nombre, setNombre] = useState([]);
  const Apis = () => {
    //Nota que el segundo argumento es un array vacío. 
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
      .then(response => setNombre(...nombre, response.data))
  }
  return (
    <div className="App">
      <button onClick={Apis}>Fetch Pokemon</button>
      {console.log(nombre)}
      <div>
        {
          nombre.results?.map((valor, indice) => {
            return <li key={indice}>{valor.name}</li>
          })
        }
      </div>
    </div>
  );
}
export default App;
