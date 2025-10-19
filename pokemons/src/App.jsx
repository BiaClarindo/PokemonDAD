import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './Components/Sidebar.jsx/SideBar.js';
import Register from './Pages/Register/Register.jsx';
import ListPokemons from './Pages/ListPokemons/Pokemons.jsx';
function App() {
  // Removendo o padding do contêiner principal e movendo o minHeight para o CSS global.
  // Vamos usar um className aqui para facilitar o estilo.
  return (
    <Router>
      <div className="app-layout"> 
        <SideBar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/listPokemons" element={<ListPokemons />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
