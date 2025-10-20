import './Pokemons.css';

function Pokemons({ pokemons, onDeletePokemon }) {
  // 3. LOG: Verifique quais pokémons este componente está a receber
  console.log("Componente de Listagem recebeu:", pokemons);

  return (
    <div className='ListPokemons'>
      <h2>Conheça os Pokémons já cadastrados!</h2>
      <div className="pokemons">
        {pokemons && pokemons.length === 0 ? (
          <p>Nenhum pokémon foi cadastrado</p>
        ) : (
          pokemons && pokemons.map((p, index) => (
            <div key={index} className="pokemon-card">
              <div className="poke-info">
                <h3>{p.nome}</h3>
                <p>Tipo: {p.tipo}</p>
                <p>Poder: {p.poder}</p>
                <p>{p.descricao}</p>
              </div>
              <button className="apagar-btn" onClick={() => onDeletePokemon(index)}>
                Apagar
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Pokemons;