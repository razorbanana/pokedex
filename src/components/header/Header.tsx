import { FC } from "react"
import PokemonSearch from "./PokemonSearch"
import CategorySelect from "./CategorySelect"

const Header:FC = () => {
    
    return (
        <div>
            <CategorySelect />
            <PokemonSearch />
        </div>
    )
}

export default Header