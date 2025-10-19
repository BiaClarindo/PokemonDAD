import { useState } from 'react'
import './App.css'

function Pokemons() {

    const [pokemons, setNovoPokemon] = useState([]);

    return (
        <div className='ListPokemons'>
            <h2>Conheça os Pokémons já cadastrados!</h2>
            <div className="pokemons">
                {pokemons.length == 0 ? (
                <p>Nenhum pokémon foi cadastrado</p>
                ) : (
                    pokemons.map((p, index) => (
                        <div key={index} className="pokemon-card">
                            <div className="poke-info">
                                <h3>{p.nome}</h3>
                                <p>Tipo: {p.tipo}</p>
                                <p>Poder:{p.poder}</p>
                                <p>{p.descricao}</p>
                            </div>
                            <button className="apagar-btn" onClick={() => apagarPokemon(index)}>Apagar</button>
                        </div>
                        
                    )
                ))}
            </div>
        </div>
    )
}

function apagarPokemon(index) {
    const novosPokemons = [...pokemons];
    novosPokemons.splice(index, 1);
    setNovoPokemon(novosPokemons);
}
