import { fetchPokemonNameList, getPokemonByName } from "../api/pokemonAPI"
import config from "../config/config"
import observer from "../observers/observer"
import PokemonInfo from "../types/PokemonInfoType"


interface Model {
    fetchPokemonList:  () => Promise<void>,
    updatePokemonData: (name:string) => Promise<void>,
    getPokemonList: () => PokemonInfo[]
}

const Model = function():Model{
    const pokemonList:PokemonInfo[] = []
    let pokemonData = {}

    const fetchPokemonList = async ():Promise<void> => {
        const pokemons = await fetchPokemonNameList()
        pokemonList.push(...pokemons)
        observer.emit(config.EVENT_NAMES.POKEMON_LIST_FETCHED, pokemons)
    }

    const updatePokemonData = async (name:string):Promise<void> => {
        pokemonData = await getPokemonByName(name)
        observer.emit(config.EVENT_NAMES.UPDATE_POKEMON, pokemonData)
    }

    const getPokemonList = ():PokemonInfo[] => {
        return pokemonList
    }

    return {
        fetchPokemonList,
        updatePokemonData,
        getPokemonList
    }
}

const model = Model()
export default model