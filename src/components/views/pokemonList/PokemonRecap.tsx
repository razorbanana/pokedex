import './PokemonList.css'
import { FC, useEffect, useState } from "react";
import { getPokemonByName } from "../../../api/pokemonAPI";
import observer from '../../../observers/observer';
import config from '../../../config/config';
import DefaultPokemonData from '../../../utility/defaults/DefaultPokemon';
import PokemonData from '../../../types/PokemonDataType';

const PokemonRecap:FC<{pokemonName:string}> = ({pokemonName}) => {
    const [pokemon, setPokemon] = useState(DefaultPokemonData)

    useEffect(()=>{
        console.log(`I will fetch ${pokemonName}`)
        getPokemonByName(pokemonName).then(response => {
            if (response){
                setPokemon(response as PokemonData)
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