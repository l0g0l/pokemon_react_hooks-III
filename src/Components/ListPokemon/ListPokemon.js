import React, { useState } from 'react';
import Card from '../Card/Card';


// le pasamos por props pokemon que es donde se guarda todo lo recibido de la API. Pintamos todas las cards mediante un map
// es necesario el return para devolver la información de cada iteración del map

function ListPokemon(props) {
    console.log(props)
    return (
        <div>

            {props.data.map((item) => {
                return (<>
                <h2>{item.name}</h2>
                
                <Card name={item.name} url={item.sprites.front_default}/>
                </>
                )
            })}

        </div>
    )
}

export default ListPokemon