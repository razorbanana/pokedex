import Type from "../types/pokemonTypeEnum";

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

    function isType(value: string): boolean {
        return Object.values(Type).includes(value as Type);
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

export default typesModule