import React, { useState, useEffect } from 'react';
import Pokedex from '../components/Pokedex';

const MainContainer = () => {
    const [pokemon, setPokemon] = useState([]);
    const [singlePokemon, setSinglePokemon] = useState({})

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(res => res.json())
            .then((data) => {
                setPokemon(data.results)
            }).then(
                fetch(`https://pokeapi.co/api/v2/pokemon-form/1`)
                    .then(res => res.json())
                    .then(data => setSinglePokemon(data)
                    ))
    }, [])

    const nextPokemon = () => {
        const pokeIndex = findIndex();
        fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokeIndex + 2}`)
            .then(res => res.json())
            .then(data => {
                setSinglePokemon(data)
            }
            )
    }


    const prevPokemon = () => {
        const pokeIndex = findIndex();
        fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokeIndex}`)
            .then(res => res.json())
            .then(data => {
                setSinglePokemon(data)
            }
            )
    }

    const findIndex = () => {
        let pokeIndex = null;
        pokemon.forEach((x, index) => {
            if (x.name === singlePokemon.name) {
                pokeIndex = index
            }
        })
        return pokeIndex;
    }

    return (
        <>
            <Pokedex
                pokemon={pokemon}
                singlePokemon={singlePokemon}
                nextPokemon={nextPokemon}
                prevPokemon={prevPokemon}
            />
        </>
    )
}

export default MainContainer;