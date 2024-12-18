import controller from "../../controllers/controller"

const validatePokemon = (name:string):boolean => {
    const pokemons = controller.getPokemons()
    if (!Number.isNaN(parseInt(name)) && parseInt(name) <= pokemons.length){
        return true
    }
    if (pokemons.find(pokemon => pokemon.name.toLowerCase() === name.toLowerCase())){
        return true
    }
    return false
}

export default validatePokemon