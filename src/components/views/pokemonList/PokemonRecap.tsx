import { FC, useEffect, useState } from "react";
import { getPokemonByName } from "../../../api/pokemonAPI";

type Pokemon = {
    name: string, 
    types: Array<{type: {name:string}}>
}

const PokemonRecap:FC<{pokemonName:string}> = ({pokemonName}) => {
    const [pokemon, setPokemon] = useState({name:"default", types: [{type: {name: "normal"}}]})

    useEffect(()=>{
        console.log(`I will fetch ${pokemonName}`)
        getPokemonByName(pokemonName).then(response => {
            if (response){
                setPokemon(response as Pokemon)
            }
        })
    }, [pokemonName])

    return (
        <div>
            {pokemon.name+" "}
            {pokemon.types.map(type=> type.type.name).join(" ")}
        </div>
    )
}

export default PokemonRecap