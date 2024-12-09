import { FC, useState } from "react";
import { getPokemonByName } from "../../api/pokemonAPI";
import validatePokemon from "../../utility/pokemonValidation";

const GetPokemonByNameButton:FC = () => {
    const [pokemon, setPokemon] = useState('')
    const ClickGetPokemonByName = async () => {
        if (validatePokemon(pokemon)){
            const response = await getPokemonByName(pokemon)
            console.log(response)
        }else{
            console.log("Not validated")
        }
    }

    return (
        <div>
            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPokemon(e.target.value)} value={pokemon}></input>
            <button onClick={ClickGetPokemonByName}>Get Pokemon By Name</button>
        </div>
    )
}

export default GetPokemonByNameButton