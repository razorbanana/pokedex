import config from "../config/config"
import logError from "../logging/logError"
import observer from "../observers/observer"
import PokemonData from "../types/PokemonDataType"
import PokemonInfo from "../types/PokemonInfoType"
import DefaultPokemonData from "../utility/defaults/DefaultPokemon"
import { fetchGetRequest } from "./api"

export const getPokemonByName = async (name:string):Promise<PokemonData> => {
    try {  
        const response = await fetchGetRequest(`${config.POKEMON_ENDPOINT}/${name}`)
        return response as PokemonData
    } catch (e: unknown) {
        logError(e)
        observer.emit(config.EVENT_NAMES.SHOW_ERROR, "Fetching pokemon is failed")
        return DefaultPokemonData
    }
}

export const fetchPokemonNameList = async (limit:number=config.POKEMON_LIST_LIMIT, offset?: number):Promise<PokemonInfo[]> => {
    try {  
        const response = await fetchGetRequest(config.POKEMON_ENDPOINT, {
            limit: limit,
            offset
        }) as {results: PokemonInfo[]}
        return response.results
    } catch (e: unknown) {
        logError(e)
        observer.emit(config.EVENT_NAMES.SHOW_ERROR, "Fetching all pokemon names is failed")
        return []
    }
}