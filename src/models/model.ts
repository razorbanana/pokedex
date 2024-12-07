import { getPokemonByName, getPokemonList } from "../api/pokemonAPI"
import config from "../config/config"
import observer from "../observers/observer"
import { Pokemon } from "../types/types"

interface Model {
    fetchPokemonList:  () => Promise<void>,
    updatePokemonData: (name:string) => Promise<void>
}


const Model = function():Model{
    const pokemonOffset = 0
    const pokemonList:Pokemon[] = []
    let pokemonData = {}

    const fetchPokemonList = async ():Promise<void> => {
        const pokemons = await getPokemonList(pokemonOffset)
        pokemonList.push(...pokemons)
    }

    const updatePokemonData = async (name:string):Promise<void> => {
        pokemonData = await getPokemonByName(name)
        observer.emit(config.EVENT_NAMES.UPDATE_POKEMON, pokemonData)
    }

    return {
        fetchPokemonList,
        updatePokemonData
    }
}

const model = Model()
export default model