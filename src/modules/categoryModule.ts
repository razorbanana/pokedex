import General from "../components/views/general/General";
import PokemonList from "../components/views/pokemonList/PokemonList";
import CategoryObject from "../types/CategoryType";
import DefaultCategory from "../utility/defaults/DefaultCategoryObject";

interface CategoryModule {
    getCategory: (name:Categories) => CategoryObject,
    getCategories: () => Categories[]
}

export enum Categories {
    GENERAL = 'GENERAL',
    ABILITIES = 'ABILITIES',
    LIST = "LIST"
}

const CategoryModule:() => CategoryModule = () => {

    const categoryMap: Record<Categories, CategoryObject> = {
        [Categories.GENERAL]: {
            component: General,
            icon: ""
        },
        [Categories.ABILITIES]: {
            component: General,
            icon: ""
        },
        [Categories.LIST]: {
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

    const getCategories = (): Categories[] => {
        return Object.keys(categoryMap) as Categories[]
    }

    return {
        getCategory,
        getCategories
    }
}

const categoryModule = CategoryModule()
Object.freeze(categoryModule)
export default categoryModule