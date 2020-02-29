import React from 'react';
import SinglePokemon from './SinglePokemon';
import './StyledPokedex.css';

const Pokedex = ({
    pokemon,
    singlePokemon,
    nextPokemon,
    prevPokemon
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
            <SinglePokemon
                singlePokemon={singlePokemon} />
            <button onClick={handleNext} className={getPlusButtonClass()} >+</button>
            <button onClick={handlePrev} className={getButtonClass() ? 'hide' : null}>-</button>
        </div>
    )
}

export default Pokedex;