import PokemonList from "../../components/views/pokemonList/PokemonList"
import CategoryObject from "../../types/CategoryType"

const DefaultCategoryObject = ():CategoryObject => {
    return {
            component: PokemonList,
            icon: ""
        }
}

export default DefaultCategoryObject