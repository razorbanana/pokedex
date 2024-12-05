import { FC, useState } from "react";
import Search from "../inputs/Search";

const PokemonSearch:FC = () => {
    const [pokemonSearch, setPokemonSearch] = useState("")
    const onPokemonSearchChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPokemonSearch(e.target.value)
    }
    return <Search value={pokemonSearch} onChange={onPokemonSearchChange}/>
}

export default PokemonSearch