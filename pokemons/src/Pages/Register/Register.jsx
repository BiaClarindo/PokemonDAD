import { useState } from 'react'
import './App.css'

function App() {
  const [pokemons, setNovoPokemon] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [poder, setPoder] = useState("");
  const [mensagemResposta, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem("");
    setErro("");

    if(!nome || !tipo || !descricao || !poder){
      setErro("Todos os campos devem ser preenchidos");
      return;
    }

    const pokemon = {nome, tipo, descricao, poder};
    setNovoPokemon([...pokemons, pokemon]);
    setMensagem(`${nome} cadastrado com sucesso`);

    setDescricao("");
    setNome("");
    setPoder("");
    setTipo("");
  };

  return (
   <div className="container">
    <h1>Pokémons</h1>
    <hr />
    <br />
    <form onSubmit={handleSubmit} className='formulario'>
      <label>Nome:</label>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/> <br /><br />

      <label>Tipo:</label>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Selecione um tipo</option>
        <option value="🔥 Fogo">🔥 Fogo</option>
        <option value="💧 Água">💧 Água</option>
        <option value="🌱 Grama">🌱 Grama</option>
        <option value="⚡ Elétrico">⚡ Elétrico</option>
        <option value="🧠 Psíquico">🧠 Psíquico</option>
        <option value="🪨 Pedra">🪨 Pedra</option>
      </select><br /><br />

      <label>Poder:</label>
      <input type="number" value={poder} onChange={(e) => setPoder(e.target.value)} min="0" max="100" /><br /><br />

      <label>Descrição:</label>
      <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea><br /><br />
      <button type="submit">Cadastrar Pokémon</button>
    </form>
    {erro && <p className="erro">{erro}</p>}
    {mensagemResposta && <p className="resposta">{mensagemResposta}</p>}

   
      <h2>Conheça os Pokémons já cadastrados!</h2>
      <div className="pokemons">
        {pokemons.length == 0 ? (
          <p>Nenhum pokémon foi cadastrado</p>
        ) : (
          pokemons.map((p, index) => (
            <div key={index} className="pokemon-card">
              <h3>{p.nome}</h3>
              <p>Tipo: {p.tipo}</p>
              <p>Poder:{p.poder}</p>
              <p>{p.descricao}</p>
            </div>
          )
        ))}
      </div>
   </div>

  )
}

export default App
