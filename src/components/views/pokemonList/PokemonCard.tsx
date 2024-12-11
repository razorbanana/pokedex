import { FC, useEffect, useState } from "react";
import { getPokemonByName } from "../../../api/pokemonAPI";
import observer from '../../../observers/observer';
import config from '../../../config/config';
import DefaultPokemonData from '../../../utility/defaults/DefaultPokemon';
import PokemonData from '../../../types/PokemonDataType';
import PokemonTitle from "../../common/PokemonTitle";

const PokemonCard:FC<{pokemonName:string}> = ({pokemonName}) => {
    const [pokemon, setPokemon] = useState<PokemonData>(DefaultPokemonData)

    useEffect(()=>{
        getPokemonByName(pokemonName).then(response => {
            if (response){
                setPokemon(response as PokemonData)
            }
        })
    }, [pokemonName])

    const handlePokemonSelect = ():void => {
        observer.emit(config.EVENT_NAMES.SEARCH_POKEMON, pokemonName)
    }

    return (
        <div className="PokemonCard" onClick={handlePokemonSelect}>
            <PokemonTitle name={pokemon.name} id={pokemon.id} types={pokemon.types} />
            <br></br>
            <img src={pokemon.sprites.front_default} className='PokemonCard-PokemonImage'/>
        </div>
    )
}

export default PokemonCard