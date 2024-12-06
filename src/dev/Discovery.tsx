import { FC } from "react"
import PokemonSearch from "../components/header/PokemonSearch"
import CategorySelect from "../components/header/CategorySelect"

const Discovery:FC = () => {
    return (
        <div>
            <h1>Discovery Component</h1>
            <h2>Pokemon Search</h2>
            <PokemonSearch />
            <h2>Category Select</h2>
            <CategorySelect />
        </div>
    )
}

export default Discovery