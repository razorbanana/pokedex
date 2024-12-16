import PokemonList from "../../components/views/pokemonList/PokemonList"
import CategoryObject from "../../types/CategoryType"

const DefaultCategory = ():CategoryObject => {
    return {
            component: PokemonList,
            icon: ""
        }
}

export default DefaultCategory