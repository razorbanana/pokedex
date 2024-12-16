import isType from "../types/guards/isPokemonType";

export enum Type {
    normal= "normal",
    fighting= "fighting",
    flying= "flying",
    poison= "poison",
    ground= "ground",
    rock= "rock",
    bug= "bug",
    ghost= "ghost",
    steel= "steel",
    fire= "fire",
    water= "water",
    grass= "grass",
    electric= "electric",
    psychic= "psychic",
    ice= "ice",
    dragon= "dragon",
    dark= "dark",
    fairy= "fairy",
    stellar= "stellar",
    unknown= "unknown",
}


interface TypesModule {
    getTypeIconURL: (name:string) => string
}

const TypesModule:() => TypesModule = () => {

    const typeIconsMap:Record<Type, string> = {
        normal: `/types/normal.svg`,
        fighting: `/types/fighting.svg`,
        flying: `/types/flying.svg`,
        poison: `/types/poison.svg`,
        ground: `/types/ground.svg`,
        rock: `/types/rock.svg`,
        bug: `/types/bug.svg`,
        ghost: `/types/ghost.svg`,
        steel: `/types/steel.svg`,
        fire: `/types/fire.svg`,
        water: `/types/water.svg`,
        grass: `/types/grass.svg`,
        electric: `/types/electric.svg`,
        psychic: `/types/psychic.svg`,
        ice: `/types/ice.svg`,
        dragon: `/types/dragon.svg`,
        dark: `/types/dark.svg`,
        fairy: `/types/fairy.svg`,
        stellar: `/types/stellar.png`,
        unknown: `/types/unknown.svg`,
    }

    const getTypeIconURL = (name:string):string => {
        if (isType(name)){
            return typeIconsMap[name as Type]
        }
        return typeIconsMap.unknown
    }

    return {
        getTypeIconURL
    }
}

const typesModule = TypesModule()
Object.freeze(typesModule)
export default typesModule