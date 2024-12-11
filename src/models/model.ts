import { fetchPokemonNameList, getPokemonByName, getSpeciesByName } from "../api/pokemonAPI"
import config from "../config/config"
import observer from "../observers/observer"
import PokemonDataType from "../types/PokemonDataType"
import PokemonInfo from "../types/PokemonInfoType"
import SpeciesDataType from "../types/SpeciesDataType"
import DefaultPokemonData from "../utility/defaults/DefaultPokemon"
import DefaultSpeciesData from "../utility/defaults/DefaultSpeciesData"


interface Model {
    fetchPokemonList:  () => Promise<void>,
    updatePokemonData: (name:string) => Promise<void>,
    getPokemonList: () => PokemonInfo[]
}

type ModelData = {
    pokemonList: PokemonInfo[],
    pokemonData: PokemonDataType,
    pokemonSpeciesData: SpeciesDataType
}

const Model = function():Model{
    const data:ModelData = {
        pokemonList: [],
        pokemonData: DefaultPokemonData(),
        pokemonSpeciesData: DefaultSpeciesData()
    }
    observer.subscribe(config.EVENT_NAMES.SEARCH_POKEMON, (data:unknown):Promise<void> => updatePokemonData(data as string))

    const fetchPokemonList = async ():Promise<void> => {
        const pokemons = await fetchPokemonNameList()
        data.pokemonList.push(...pokemons)
        observer.emit(config.EVENT_NAMES.POKEMON_LIST_FETCHED, pokemons)
    }

    const updatePokemonData = async (name:string):Promise<void> => {
        data.pokemonData = await getPokemonByName(name)
        data.pokemonSpeciesData = await getSpeciesByName(name)
        observer.emit(config.EVENT_NAMES.UPDATE_POKEMON, data.pokemonData)
        observer.emit(config.EVENT_NAMES.UPDATE_SPECIES, data.pokemonSpeciesData)
    }

    const getPokemonList = ():PokemonInfo[] => {
        return data.pokemonList
    }

    return {
        fetchPokemonList,
        updatePokemonData,
        getPokemonList
    }
}

const model = Model()
export default model