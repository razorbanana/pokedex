import { FC, useEffect, useState } from "react";
import config from "../../../config/config";
import PokemonRecap from "./PokemonRecap";
import { Pokemon } from "../../../types/types";
import observer from "../../../observers/observer";
import controller from "../../../controller/controller";

const PokemonList:FC = () => {
    const [numberToShow, setNumber] = useState(config.POKEMON_LIST_SHOW_LIMIT)
    const [pokemonList, setPokemonList] = useState<Pokemon[]>(controller.getPokemons())
    const pokemonsToShow = pokemonList.slice(0, numberToShow)

    useEffect(()=> {
        const action = (data: unknown) => {
            setPokemonList(data as Pokemon[])
        }
        observer.subscribe(config.EVENT_NAMES.POKEMON_LIST_FETCHED, action)
        return ()=>{
            observer.unsubscribe(config.EVENT_NAMES.POKEMON_LIST_FETCHED, action)
        }
    }, [])
    
    if (pokemonList.length === 0){
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            {pokemonsToShow.map(pokemon => <PokemonRecap key={pokemon.name} pokemonName={pokemon.name}/>)}
            <button onClick={() => setNumber(numberToShow+config.POKEMON_LIST_SHOW_LIMIT)}>+{config.POKEMON_LIST_SHOW_LIMIT}</button>
        </div>
    )
}

export default PokemonList