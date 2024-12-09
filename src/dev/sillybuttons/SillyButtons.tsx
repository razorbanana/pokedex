import { FC } from "react";
import GetPokemonsButton from "./GetPokemonsButton";
import GetPokemonByNameButton from "./GetPokemonByNameButton";
import ProduceErrorButton from "./ProduceErrorButton";

const SillyButtons:FC = () => {
    return (
        <div>
            <h3>GetPokemonsButton</h3>
            <GetPokemonsButton />
            <h3>GetPokemonByNameButton</h3>
            <GetPokemonByNameButton />
            <h3>ProduceErrorButton</h3>
            <ProduceErrorButton />
        </div>
    )
} 

export default SillyButtons