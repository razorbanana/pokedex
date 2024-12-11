import model from "../models/model"

const validatePokemon = (name:string):boolean => {
    const pokemons = model.getPokemonList()
    if (!Number.isNaN(parseInt(name)) && parseInt(name) <= pokemons.length){
        return true
    }
    if (pokemons.find(pokemon => pokemon.name.toLowerCase() === name.toLowerCase())){
        return true
    }
    return false
}

export default validatePokemon