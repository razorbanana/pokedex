import { FC, useState } from "react";
import { getPokemonList } from "../../api/pokemonAPI";

const GetPokemonsButton:FC = () => {
    const [offset, setOffset] = useState(0)
    const onClickGetPokemonList = async () => {
        const response = await getPokemonList(offset)
        console.log(response)
    }
    return (
        <div>
            <input type="number" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setOffset(parseInt(e.target.value))} value={offset}></input>
            <button onClick={onClickGetPokemonList}>Get Pokemon List</button>
        </div>
    )
} 

export default GetPokemonsButton