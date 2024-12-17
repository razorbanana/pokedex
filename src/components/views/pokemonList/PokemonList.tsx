import "./PokemonList.css"
import { FC, useEffect, useState } from "react";
import config from "../../../config/config";
import PokemonCard from "./PokemonCard";
import observer, { EventNames } from "../../../observers/observer";
import controller from "../../../controllers/controller";
import PokemonInfo from "../../../types/PokemonInfoType";
import Loading from "../../common/Loading";
import Button from "../../common/button/Button";

const PokemonList:FC = () => {
    const [numberToShow, setNumber] = useState(config.POKEMON_LIST_SHOW_LIMIT)
    const [pokemonList, setPokemonList] = useState<PokemonInfo[]>(controller.getPokemons())
    const pokemonsToShow = pokemonList.slice(0, numberToShow)

    useEffect(()=> {
        const action = (data?: PokemonInfo[]) => {
            if (data){
                setPokemonList(data)
            }
        }
        observer.subscribe(EventNames.POKEMON_LIST_FETCHED, action)
        return ()=>{
            observer.unsubscribe(EventNames.POKEMON_LIST_FETCHED, action)
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
                {pokemonsToShow.map(pokemon => <PokemonCard key={pokemon.name} pokemonName={pokemon.name}/>)}
            </div>
            <Button onClick={() => setNumber(numberToShow+config.POKEMON_LIST_SHOW_LIMIT)}>See more pokemons</Button>
        </div>
    )
}

export default PokemonList