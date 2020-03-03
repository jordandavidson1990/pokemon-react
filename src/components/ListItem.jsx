import React from 'react';

const ListItem = ({ poke, clickPokemon, index }) => {

    const handleClick = (poke) => {
        clickPokemon(poke);
    }

    return (
        <div>
            <li
                onClick={() => handleClick(poke)}
            >{index} {poke.name}</li>
        </div>
    )
}

export default ListItem;