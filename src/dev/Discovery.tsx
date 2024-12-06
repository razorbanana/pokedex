import { FC } from "react"
import PokemonSearch from "../components/header/PokemonSearch"
import CategorySelect from "../components/header/CategorySelect"
import Header from "../components/header/Header"
import Body from "../components/Body"
import General from "../components/views/general/General"
import PokemonData from "../components/views/general/PokemonData"

const Discovery:FC = () => {
    return (
        <div>
            <h1>Discovery Component</h1>
            <h2>Header</h2>
            <Header />
            <h2>Pokemon Search</h2>
            <PokemonSearch />
            <h2>Category Select</h2>
            <CategorySelect />
            <h2>Body</h2>
            <Body />
            <h2>General</h2>
            <General />
            <h2>PokemonData</h2>
            <PokemonData />
        </div>
    )
}

export default Discovery