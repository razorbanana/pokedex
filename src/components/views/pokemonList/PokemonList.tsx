import "./PokemonList.css"
import { FC, useEffect, useState } from "react";
import config from "../../../config/config";
import PokemonRecap from "./PokemonCard";
import observer from "../../../observers/observer";
import controller from "../../../controllers/controller";
import PokemonInfo from "../../../types/PokemonInfoType";
import Loading from "../../common/Loading";

const PokemonList:FC = () => {
    const [numberToShow, setNumber] = useState(config.POKEMON_LIST_SHOW_LIMIT)
    const [pokemonList, setPokemonList] = useState<PokemonInfo[]>(controller.getPokemons())
    const pokemonsToShow = pokemonList.slice(0, numberToShow)

    useEffect(()=> {
        const action = (data: unknown) => {
            setPokemonList(data as PokemonInfo[])
        }
        observer.subscribe(config.EVENT_NAMES.POKEMON_LIST_FETCHED, action)
        return ()=>{
            observer.unsubscribe(config.EVENT_NAMES.POKEMON_LIST_FETCHED, action)
        }
    }, [])
    
    if (pokemonList.length === 0){
        return (
            <Loading />
        )
    }

    return (
        <div className="PokemonList">
            <div className="GridWrapper">
                {pokemonsToShow.map(pokemon => <PokemonRecap key={pokemon.name} pokemonName={pokemon.name}/>)}
            </div>
            <button onClick={() => setNumber(numberToShow+config.POKEMON_LIST_SHOW_LIMIT)}>+{config.POKEMON_LIST_SHOW_LIMIT}</button>
        </div>
    )
}

export default PokemonList