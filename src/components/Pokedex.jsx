import React from 'react';
import SinglePokemon from './SinglePokemon';
import PokemonList from './PokemonList';
import './StyledPokedex.css';

const Pokedex = ({
    pokemon,
    singlePokemon,
    nextPokemon,
    prevPokemon,
    clickPokemon
}) => {

    function handleNext() {
        nextPokemon()
    }

    function handlePrev() {
        prevPokemon()
    }

    function getButtonClass() {
        if (pokemon.length) {
            if (pokemon[0].name === singlePokemon.name) {
                return true;
            } else {
                return false;
            }
        }
    };
    const getPlusButtonClass = () => {
        if (pokemon.length) {
            if (pokemon[150].name === singlePokemon.name) {
                return 'hide'
            }
        }
    }

    return (
        <div className="pokedex">
            <div className="single-pokemon">
                <SinglePokemon
                    singlePokemon={singlePokemon} />
                <button onClick={handlePrev} className={getButtonClass() ? 'hide' : null}>
                    &#8826;</button>
                <button onClick={handleNext} className={getPlusButtonClass()} >&#8827;</button>

            </div>
            <PokemonList
                pokemon={pokemon}
                clickPokemon={clickPokemon} />
        </div>
    )
}

export default Pokedex;