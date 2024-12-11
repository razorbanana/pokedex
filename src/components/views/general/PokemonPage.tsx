import { FC, useEffect, useState } from "react"
import observer from "../../../observers/observer"
import config from "../../../config/config"
import PokemonData from "../../../types/PokemonDataType"
import DefaultPokemonData from "../../../utility/defaults/DefaultPokemon"
import PokemonTitle from "../../common/PokemonTitle"

const PokemonPage:FC = () => {
    const [pokemon, setPokemon] = useState<PokemonData>(DefaultPokemonData)
    useEffect(()=> {
        const action = (data:unknown) => setPokemon(data as PokemonData)
        observer.subscribe(config.EVENT_NAMES.UPDATE_POKEMON, action)
        return () => {
            observer.unsubscribe(config.EVENT_NAMES.UPDATE_POKEMON, action)
        }
    }, [])
    return (
        <div className="PokemonPage">
            <PokemonTitle name={pokemon.name} id={pokemon.id} types={pokemon.types} />
            <div className="LayoutWrapper">
                <img src={pokemon.sprites.front_default} className='PokemonCard-PokemonImage'/>
                <div className="PokemonInfoWrapper">
                    <div>height: {pokemon.height}</div>
                    <div>weight: {pokemon.weight}</div>
                </div>
            </div>
        </div>
    )
}

export default PokemonPage