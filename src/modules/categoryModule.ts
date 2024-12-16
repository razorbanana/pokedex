import General from "../components/views/general/General";
import PokemonList from "../components/views/pokemonList/PokemonList";
import { Categories } from "../config/config";
import CategoryObject from "../types/CategoryType";
import DefaultCategory from "../utility/defaults/DefaultCategory";

interface CategoryModule {
    getCategory: (name:Categories) => CategoryObject
}

const CategoryModule:() => CategoryModule = () => {

    const categoryMap: {[C in Categories] : CategoryObject} = {
        "general": {
            component: General,
            icon: ""
        },
        "abilities": {
            component: General,
            icon: ""
        },
        "list": {
            component: PokemonList,
            icon: ""
        }
    }

    const getCategory = (name:Categories): CategoryObject => {
        const result = {
            ...categoryMap[name],
            ...DefaultCategory()
        }
        return result
    }

    return {
        getCategory
    }
}

const categoryModule = CategoryModule()
Object.freeze(categoryModule)
export default categoryModule