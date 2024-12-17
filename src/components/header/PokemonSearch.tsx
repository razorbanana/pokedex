import { FC, useEffect, useState } from "react";
import Search from "../common/inputs/Search";
import observer, { EventNames } from "../../observers/observer";
import validatePokemon from "../../utility/pokemonValidation";

const PokemonSearch:FC = () => {
    const [pokemonSearch, setPokemonSearch] = useState("")
    const onPokemonSearchChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPokemonSearch(e.target.value)
    }

    useEffect(()=>{
        const action = (data?: string) => {
            if (data){
                setPokemonSearch(data)
            }
        }
        observer.subscribe(EventNames.SEARCH_POKEMON, action)
        return () => {
            observer.unsubscribe(EventNames.SEARCH_POKEMON, action)
        }
    }, [])

    const handleSearch = ():void => {
        if(validatePokemon(pokemonSearch)){
            observer.emit(EventNames.SEARCH_POKEMON, pokemonSearch.toLowerCase())
        }else{
            observer.emit(EventNames.SHOW_ERROR, "Wrong name or pokedex number")
        }
    }
 
    return <Search value={pokemonSearch} onChange={onPokemonSearchChange} onSubmit={handleSearch}/>
}

export default PokemonSearch