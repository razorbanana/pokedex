import model from "../models/model"
import PokemonData from "../types/PokemonDataType"
import PokemonInfo from "../types/PokemonInfoType"
import SpeciesDataType from "../types/SpeciesDataType"
import DefaultPokemonData from "../utility/defaults/DefaultPokemon"
import DefaultSpeciesData from "../utility/defaults/DefaultSpeciesData"


interface Controller {
    fetchPokemons: () => Promise<void>,
    getPokemons: () => PokemonInfo[],
    getChosenPokemon: () => PokemonData,
    getChosenSpecies: () => SpeciesDataType
}

const Controller = ():Controller => {
    const fetchPokemons = async ():Promise<void> => {
        await model.fetchPokemonList()
    }

    const getPokemons = ():PokemonInfo[] => {
        const pokemons = model.getPokemonList()
        return pokemons || []
    }

    const getChosenPokemon = ():PokemonData => {
        const pokemon = model.getPokemonData()
        return pokemon || DefaultPokemonData()
    }

    const getChosenSpecies = ():SpeciesDataType => {
        const species = model.getPokemonSpeciesData()
        return species || DefaultSpeciesData()
    }

    return {
        fetchPokemons,
        getPokemons,
        getChosenPokemon,
        getChosenSpecies
    }
}

const controller = Controller()
export default controller