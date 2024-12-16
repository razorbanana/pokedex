import model, { ModelKeys } from "../models/model"
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
        const pokemons = model.getData(ModelKeys.POKEMONS)
        return pokemons || []
    }

    const getChosenPokemon = ():PokemonData => {
        const pokemon = model.getData(ModelKeys.POKEMON)
        return pokemon || DefaultPokemonData()
    }

    const getChosenSpecies = ():SpeciesDataType => {
        const species = model.getData(ModelKeys.SPECIES)
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