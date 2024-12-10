import { FC, useEffect, useState } from "react"
import observer from "../../../observers/observer"
import config from "../../../config/config"
import PokemonData from "../../../types/PokemonDataType"
import DefaultPokemonData from "../../../utility/defaults/DefaultPokemon"

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
        <div>
            {JSON.stringify(pokemon)}
        </div>
    )
}

export default PokemonPage