import model from "../models/model"
import PokemonInfo from "../types/PokemonInfoType"


interface Controller {
    fetchPokemons: () => Promise<void>,
    getPokemons: () => PokemonInfo[]
}

const Controller = ():Controller => {
    const fetchPokemons = async ():Promise<void> => {
        await model.fetchPokemonList()
    }

    const getPokemons = ():PokemonInfo[] => {
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