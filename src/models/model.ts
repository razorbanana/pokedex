import { fetchPokemonNameList, getPokemonByName } from "../api/pokemonAPI"
import config from "../config/config"
import observer from "../observers/observer"
import PokemonData from "../types/PokemonDataType"
import PokemonInfo from "../types/PokemonInfoType"
import DefaultPokemonData from "../utility/defaults/DefaultPokemon"


interface Model {
    fetchPokemonList:  () => Promise<void>,
    updatePokemonData: (name:string) => Promise<void>,
    getPokemonList: () => PokemonInfo[]
}

type ModelData = {
    pokemonList: PokemonInfo[],
    pokemonData: PokemonData
}

const Model = function():Model{
    const data:ModelData = {
        pokemonList: [],
        pokemonData: DefaultPokemonData
    }
    observer.subscribe(config.EVENT_NAMES.SEARCH_POKEMON, (data:unknown):Promise<void> => updatePokemonData(data as string))

    const fetchPokemonList = async ():Promise<void> => {
        const pokemons = await fetchPokemonNameList()
        data.pokemonList.push(...pokemons)
        observer.emit(config.EVENT_NAMES.POKEMON_LIST_FETCHED, pokemons)
    }

    const updatePokemonData = async (name:string):Promise<void> => {
        data.pokemonData = await getPokemonByName(name)
        observer.emit(config.EVENT_NAMES.UPDATE_POKEMON, data.pokemonData)
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