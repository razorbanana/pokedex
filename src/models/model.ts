import { fetchPokemonNameList, getPokemonByName, getSpeciesByName } from "../api/pokemonAPI"
import observer, { EventNames } from "../observers/observer"
import PokemonDataType from "../types/apiDataTypes/PokemonDataType"
import PokemonInfo from "../types/apiDataTypes/PokemonInfoType"
import SpeciesDataType from "../types/apiDataTypes/SpeciesDataType"
import DefaultPokemonData from "../utility/defaults/DefaultPokemonData"
import DefaultSpeciesData from "../utility/defaults/DefaultSpeciesData"


type Model = {
    fetchPokemonList:  () => Promise<void>,
    updatePokemonData: (name:string) => Promise<void>,
    getData: <K extends keyof ModelData>(key:K) => ModelData[K]
}

export enum ModelKeys {
    POKEMON = 'pokemon',
    POKEMONS = 'pokemons',
    SPECIES = 'species',
    ABILITIES = 'abilities'
}

type ModelData = {
    [ModelKeys.POKEMONS]: PokemonInfo[],
    [ModelKeys.POKEMON]: PokemonDataType,
    [ModelKeys.SPECIES]: SpeciesDataType,
}

const Model = function():Model{
    const data:ModelData = {
        [ModelKeys.POKEMONS]: [],
        [ModelKeys.POKEMON]: DefaultPokemonData(),
        [ModelKeys.SPECIES]: DefaultSpeciesData()
    }
    observer.subscribe(EventNames.SEARCH_POKEMON, (data:unknown):Promise<void> => updatePokemonData(data as string))

    const fetchPokemonList = async ():Promise<void> => {
        const pokemons = await fetchPokemonNameList()
        data[ModelKeys.POKEMONS].push(...pokemons)
        observer.emit(EventNames.POKEMON_LIST_FETCHED, pokemons)
    }

    const updatePokemonData = async (name:string):Promise<void> => {
        data[ModelKeys.POKEMON] = await getPokemonByName(name)
        data[ModelKeys.SPECIES] = await getSpeciesByName(name)
        observer.emit(EventNames.UPDATE_POKEMON, data[ModelKeys.POKEMON])
        observer.emit(EventNames.UPDATE_SPECIES, data[ModelKeys.SPECIES])
    }

    const getData = <K extends keyof ModelData>(key: K):ModelData[K] => {
        return data[key]
    } 

    return {
        fetchPokemonList,
        updatePokemonData,
        getData
    }
}

const model = Model()
export default model