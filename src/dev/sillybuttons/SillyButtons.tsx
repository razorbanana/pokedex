import { FC } from "react";
import GetPokemonsButton from "./GetPokemonsButton";
import GetPokemonByNameButton from "./GetPokemonByNameButton";
import ProduceErrorButton from "./ProduceErrorButton";
import TempLoading from "../TempLoading";

const SillyButtons:FC = () => {
    return (
        <div>
            <h3>GetPokemonsButton</h3>
            <GetPokemonsButton />
            <h3>GetPokemonByNameButton</h3>
            <GetPokemonByNameButton />
            <h3>ProduceErrorButton</h3>
            <ProduceErrorButton />
            <h2>Loading</h2>
            <TempLoading />
        </div>
    )
} 

export default SillyButtons