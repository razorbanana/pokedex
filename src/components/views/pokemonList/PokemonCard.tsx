import { FC, useEffect, useState } from "react";
import { getPokemonByName } from "../../../api/pokemonAPI";
import observer, { EventNames } from '../../../observers/observer';
import DefaultPokemonData from '../../../utility/defaults/DefaultPokemon';
import PokemonData from '../../../types/PokemonDataType';
import PokemonTitle from "../../common/pokemonData/PokemonTitle";
import PokemonImage from "../../common/pokemonData/PokemonImage";
import { Categories } from "../../../modules/categoryModule";

const PokemonCard:FC<{pokemonName:string}> = ({pokemonName}) => {
    const [pokemon, setPokemon] = useState<PokemonData>(DefaultPokemonData())

    useEffect(()=>{
        getPokemonByName(pokemonName).then(response => {
            if (response){
                setPokemon(response as PokemonData)
            }
        })
    }, [pokemonName])

    const handlePokemonSelect = ():void => {
        observer.emit(EventNames.SEARCH_POKEMON, pokemonName)
        observer.emit(EventNames.UPDATE_CATEGORY, Categories.GENERAL)
    }

    return (
        <div className="PokemonCard" onClick={handlePokemonSelect}>
            <PokemonTitle name={pokemon.name} id={pokemon.id} types={pokemon.types} />
            <br></br>
            <PokemonImage src={pokemon.sprites.front_default}/>
        </div>
    )
}

export default PokemonCard