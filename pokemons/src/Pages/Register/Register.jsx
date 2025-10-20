import { useState } from 'react'
import './Register.css'


function Register({onAddPokemon}) {
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
    onAddPokemon(pokemon);
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

   </div>

  )
}

export default Register
