import { FC, useState } from "react";
import { fetchPokemonNameList } from "../../api/pokemonAPI";

const GetPokemonsButton:FC = () => {
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(0)
    const onClickGetPokemonList = async () => {
        const response = await fetchPokemonNameList(limit ? limit : undefined, offset)
        console.log(response)
    }
    return (
        <div>
            <label>limit</label>
            <input type="number" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setLimit(parseInt(e.target.value))} value={limit}></input>
            <label>offset</label>
            <input type="number" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setOffset(parseInt(e.target.value))} value={offset}></input>
            <button onClick={onClickGetPokemonList}>Get Pokemon List</button>
        </div>
    )
} 

export default GetPokemonsButton