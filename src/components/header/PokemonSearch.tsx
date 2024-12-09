import { FC, useEffect, useState } from "react";
import Search from "../inputs/Search";
import observer from "../../observers/observer";
import config from "../../config/config";

const PokemonSearch:FC = () => {
    const [pokemonSearch, setPokemonSearch] = useState("")
    const onPokemonSearchChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPokemonSearch(e.target.value)
    }

    useEffect(()=>{
        const action = (data: unknown) => {
            setPokemonSearch(data as string)
        }
        observer.subscribe(config.EVENT_NAMES.UPDATE_POKEMON, action)
        return () => {
            observer.unsubscribe(config.EVENT_NAMES.UPDATE_POKEMON, action)
        }
    }, [])

    const handleSearch = ():void => {
        observer.emit(config.EVENT_NAMES.UPDATE_POKEMON, pokemonSearch)
    }
 
    return <Search value={pokemonSearch} onChange={onPokemonSearchChange} onSubmit={handleSearch}/>
}

export default PokemonSearch