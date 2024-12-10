type PokemonData = {
    name: string, 
    types: Array<{type: {name:string}}>,
    sprites: {
        front_default: string
    },
    id: number
}

export default PokemonData