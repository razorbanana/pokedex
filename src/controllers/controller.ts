import model, { ModelKeys } from "../models/model"
import AbilityDataType from "../types/apiDataTypes/AbilityDataType"
import PokemonData from "../types/apiDataTypes/PokemonDataType"
import PokemonInfo from "../types/apiDataTypes/PokemonInfoType"
import SpeciesDataType from "../types/apiDataTypes/SpeciesDataType"
import DefaultAbilityData from "../utility/defaults/DefaultAbilityData"
import DefaultPokemonData from "../utility/defaults/DefaultPokemonData"
import DefaultSpeciesData from "../utility/defaults/DefaultSpeciesData"


interface Controller {
    fetchPokemons: () => Promise<void>,
    getPokemons: () => PokemonInfo[],
    getChosenPokemon: () => PokemonData,
    getChosenSpecies: () => SpeciesDataType,
    getChosenAbilities: () => AbilityDataType[],
    setChosenAbilities: (data:AbilityDataType[]) =>void
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

    const getChosenAbilities = ():AbilityDataType[] => {
        const abilities = model.getData(ModelKeys.ABILITIES)
        return abilities || DefaultAbilityData()
    }

    const setChosenAbilities = (data:AbilityDataType[]):void => {
        model.setData(ModelKeys.ABILITIES, data)
    }

    return {
        fetchPokemons,
        getPokemons,
        getChosenPokemon,
        getChosenSpecies,
        getChosenAbilities,
        setChosenAbilities
    }
}

const controller = Controller()
export default controller