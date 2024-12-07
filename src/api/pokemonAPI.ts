import config from "../config/config"
import { Pokemon } from "../types/types"
import { fetchGetRequest } from "./api"

export const getPokemonByName = async (name:string):Promise<object> => {
    const response = await fetchGetRequest(`${config.POKEMON_ENDPOINT}/${name}`)
    return response 
}

export const getPokemonList = async (offset: number):Promise<Pokemon[]> => {
    const response = await fetchGetRequest(config.POKEMON_ENDPOINT, {
        limit: config.POKEMON_LIST_LIMIT,
        offset
    })
    return response as Pokemon[]
}