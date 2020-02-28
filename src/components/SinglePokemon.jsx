import React from 'react';

const SinglePokemon = ({ singlePokemon }) => {
    if (!singlePokemon) return null;

    return (
        <h1>{singlePokemon.name}</h1>
    )
}

export default SinglePokemon;