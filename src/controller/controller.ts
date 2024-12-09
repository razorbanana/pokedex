import model from "../models/model"
import { Pokemon } from "../types/types"

interface Controller {
    fetchPokemons: () => Promise<void>,
    getPokemons: () => Pokemon[]
}

const Controller = ():Controller => {
    const fetchPokemons = async ():Promise<void> => {
        await model.fetchPokemonList()
    }

    const getPokemons = ():Pokemon[] => {
        const pokemons = model.getPokemonList()
        return pokemons || []
    }

    return {
        fetchPokemons,
        getPokemons
    }
}

const controller = Controller()
export default controller