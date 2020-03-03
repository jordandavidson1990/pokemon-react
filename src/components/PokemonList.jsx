import React from 'react';
import './StyledPokemonList.css';
import ListItem from './ListItem';

const PokemonList = ({ pokemon, clickPokemon }) => {
    const list = pokemon.map((poke, index) => {
        return (
            <ListItem
                poke={poke}
                key={index}
                index={index + 1}
                clickPokemon={clickPokemon} />
        )
    })

    return (
        <div className="pokemon-list">
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default PokemonList;