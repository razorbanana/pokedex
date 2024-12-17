import PokemonList from "../../components/views/pokemonList/PokemonList"
import CategoryObject from "../../types/CategoryType"

const DefaultCategoryObject = ():Required<CategoryObject> => {
    return {
            component: PokemonList,
            icon: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        }
}

export default DefaultCategoryObject