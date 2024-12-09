import './PokemonList.css'
import { FC, useEffect, useState } from "react";
import { getPokemonByName } from "../../../api/pokemonAPI";
import observer from '../../../observers/observer';
import config from '../../../config/config';

type Pokemon = {
    name: string, 
    types: Array<{type: {name:string}}>,
    sprites: {
        front_default: string
    },
    id: number
}

const PokemonRecap:FC<{pokemonName:string}> = ({pokemonName}) => {
    const [pokemon, setPokemon] = useState({
        name:"default", 
        types: [{type: {name: "normal"}}], 
        sprites: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        },
        id: 0
    })

    useEffect(()=>{
        console.log(`I will fetch ${pokemonName}`)
        getPokemonByName(pokemonName).then(response => {
            if (response){
                setPokemon(response as Pokemon)
            }
        })
    }, [pokemonName])

    const handlePokemonSelect = ():void => {
        observer.emit(config.EVENT_NAMES.UPDATE_POKEMON, pokemonName)
    }

    return (
        <div className="PokemonRecap" onClick={handlePokemonSelect}>
            <p className='PokemonRecap-PokemonTitle'>{`${pokemon.name.toUpperCase()} #${pokemon.id}`}</p>{pokemon.types.map(type => <img src={`/types/${type.type.name}.svg`} key={type.type.name} alt="Type" className='PokemonRecap-TypeIcon'/>)}
            <br></br>
            <img src={pokemon.sprites.front_default} className='PokemonRecap-PokemonImage'/>
        </div>
    )
}

export default PokemonRecap