import { FC } from "react"
import PokemonSearch from "./PokemonSearch"
import CategorySelect from "./CategorySelect"
import './header.css'

const Header:FC = () => {
    
    return (
        <div className="Header">
            <CategorySelect />
            <PokemonSearch />
        </div>
    )
}

export default Header