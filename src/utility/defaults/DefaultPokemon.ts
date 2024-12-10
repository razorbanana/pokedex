import PokemonData from "../../types/PokemonDataType"

const DefaultPokemonData:PokemonData = {
        name:"What am I", 
        types: [{type: {name: "normal"}}], 
        sprites: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        },
        id: 0
    }

export default DefaultPokemonData