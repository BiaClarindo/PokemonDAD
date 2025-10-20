// No arquivo App.jsx

import { useState } from 'react'; // Não se esqueça de importar
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from './Components/Sidebar/Sidebar.jsx';
import Register from './Pages/Register/Register.jsx';
import ListPokemons from './Pages/ListPokemons/Pokemons.jsx';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  
  const handleAddPokemon = (novoPokemon) => {
    const novaLista = [...pokemons, novoPokemon];
    setPokemons(novaLista);
    console.log("Pokémon adicionado! Nova lista no App:", novaLista);
  };
  
  const handleDeletePokemon = (indexParaApagar) => {
    const novaLista = pokemons.filter((_, index) => index !== indexParaApagar);
    setPokemons(novaLista);
  };

  console.log("Renderizando App, Pokémons atuais:", pokemons);


  return (
    <Router>
      <div>
        <SideBar />
        <main style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            <Route 
              path="/" 
              element={<Register onAddPokemon={handleAddPokemon} />} 
            />
            <Route 
              path="/listagem" 
              element={<ListPokemons pokemons={pokemons} onDeletePokemon={handleDeletePokemon} />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;