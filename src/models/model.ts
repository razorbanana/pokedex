import { fetchPokemonNameList, getPokemonByName, getSpeciesByName } from "../api/pokemonAPI"
import observer, { EventNames } from "../observers/observer"
import PokemonDataType from "../types/PokemonDataType"
import PokemonInfo from "../types/PokemonInfoType"
import SpeciesDataType from "../types/SpeciesDataType"
import DefaultPokemonData from "../utility/defaults/DefaultPokemon"
import DefaultSpeciesData from "../utility/defaults/DefaultSpeciesData"


type Model = {
    fetchPokemonList:  () => Promise<void>,
    updatePokemonData: (name:string) => Promise<void>,
    getPokemonList: () => PokemonInfo[],
    getPokemonData: () => PokemonDataType,
    getPokemonSpeciesData: () => SpeciesDataType
}

type ModelData = {
    pokemonList: PokemonInfo[],
    pokemonData: PokemonDataType,
    pokemonSpeciesData: SpeciesDataType,
}

const Model = function():Model{
    const data:ModelData = {
        pokemonList: [],
        pokemonData: DefaultPokemonData(),
        pokemonSpeciesData: DefaultSpeciesData()
    }
    observer.subscribe(EventNames.SEARCH_POKEMON, (data:unknown):Promise<void> => updatePokemonData(data as string))

    const fetchPokemonList = async ():Promise<void> => {
        const pokemons = await fetchPokemonNameList()
        data.pokemonList.push(...pokemons)
        observer.emit(EventNames.POKEMON_LIST_FETCHED, pokemons)
    }

    const updatePokemonData = async (name:string):Promise<void> => {
        data.pokemonData = await getPokemonByName(name)
        data.pokemonSpeciesData = await getSpeciesByName(name)
        observer.emit(EventNames.UPDATE_POKEMON, data.pokemonData)
        observer.emit(EventNames.UPDATE_SPECIES, data.pokemonSpeciesData)
    }

    const getPokemonList = ():PokemonInfo[] => {
        return data.pokemonList
    }
    const getPokemonData = ():PokemonDataType => {
        return data.pokemonData
    }
    const getPokemonSpeciesData = ():SpeciesDataType => {
        return data.pokemonSpeciesData
    }

    return {
        fetchPokemonList,
        updatePokemonData,
        getPokemonList,
        getPokemonData,
        getPokemonSpeciesData
    }
}

const model = Model()
export default model