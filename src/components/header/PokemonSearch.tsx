import { FC, useEffect, useState } from "react";
import Search from "../inputs/Search";
import observer from "../../observers/observer";
import config from "../../config/config";
import validatePokemon from "../../utility/pokemonValidation";

const PokemonSearch:FC = () => {
    const [pokemonSearch, setPokemonSearch] = useState("")
    const onPokemonSearchChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPokemonSearch(e.target.value)
    }

    useEffect(()=>{
        const action = (data: unknown) => {
            setPokemonSearch(data as string)
        }
        observer.subscribe(config.EVENT_NAMES.SEARCH_POKEMON, action)
        return () => {
            observer.unsubscribe(config.EVENT_NAMES.SEARCH_POKEMON, action)
        }
    }, [])

    const handleSearch = ():void => {
        if(validatePokemon(pokemonSearch)){
            observer.emit(config.EVENT_NAMES.SEARCH_POKEMON, pokemonSearch.toLowerCase())
        }else{
            observer.emit(config.EVENT_NAMES.SHOW_ERROR, "Wrong name or pokedex number")
        }
    }
 
    return <Search value={pokemonSearch} onChange={onPokemonSearchChange} onSubmit={handleSearch}/>
}

export default PokemonSearch