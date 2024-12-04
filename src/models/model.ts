import config from "../config/config"
import observer from "../observers/observer"

interface Model {
    updatePokemon: () => void
}

const Model = function():Model{
    let pokemonData = {}

    const updatePokemon = ():void => {
        pokemonData = {name:"new pokemon"}
        observer.emit(config.EVENT_NAMES.UPDATE_POKEMON, pokemonData)
    }

    return {
        updatePokemon
    }
}

const model = Model()
export default model