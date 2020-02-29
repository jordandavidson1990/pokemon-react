import React from 'react';

const SinglePokemon = ({ singlePokemon }) => {
    if (!singlePokemon) return null;

    // console.log(singlePokemon.sprites.front_default
    // );

    const imageUrl = () => {
        if (singlePokemon.sprites) {
            return singlePokemon.sprites.front_default;
        }
        else {
            return 'nah'
        }
    }

    console.log(imageUrl());


    return (
        <>
            <img src={imageUrl()} alt="" />
            <h1>{singlePokemon.name}</h1>
        </>
    )
}

export default SinglePokemon;