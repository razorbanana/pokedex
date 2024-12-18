import PokemonData from "../../types/apiDataTypes/PokemonDataType"

const DefaultPokemonData:() => PokemonData = () => {
    return {
        name:"What am I", 
        types: [{type: {name: "normal"}}], 
        sprites: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        },
        id: 0,
        height: 0,
        weight: 0,
        cries: {
            latest: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg",
            legacy: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/132.ogg"
        }
    }
}

export default DefaultPokemonData