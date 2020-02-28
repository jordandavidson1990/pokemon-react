import React, { useState } from 'react';
import SinglePokemon from './SinglePokemon';

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
        if 
    }

    return (
        <>
            <SinglePokemon
                singlePokemon={singlePokemon} />
            <button onClick={handleNext} className={}>+</button>
            <button onClick={handlePrev}>-</button>
        </>
    )
}

export default Pokedex;