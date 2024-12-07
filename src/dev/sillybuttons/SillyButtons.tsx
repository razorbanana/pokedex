import { FC } from "react";
import GetPokemonsButton from "./GetPokemonsButton";
import GetPokemonByNameButton from "./GetPokemonByNameButton";

const SillyButtons:FC = () => {
    return (
        <div>
            <h3>GetPokemonsButton</h3>
            <GetPokemonsButton />
            <h3>GetPokemonByNameButton</h3>
            <GetPokemonByNameButton />
        </div>
    )
} 

export default SillyButtons