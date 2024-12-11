type PokemonData = {
    name: string, 
    types: Array<{type: {name:string}}>,
    sprites: {
        front_default: string
    },
    id: number,
    height: number,
    weight: number
}

export default PokemonData