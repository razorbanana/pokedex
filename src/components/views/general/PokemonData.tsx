import { FC, useEffect, useState } from "react"
import observer from "../../../observers/observer"
import config from "../../../config/config"

const PokemonData:FC = () => {
    const [pokemon, setPokemon] = useState<object>({})
    useEffect(()=> {
        const action = (data:unknown) => setPokemon(data as object)
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

export default PokemonData