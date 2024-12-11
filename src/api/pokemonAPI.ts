import config from "../config/config"
import logError from "../logging/logError"
import observer from "../observers/observer"
import PokemonData from "../types/PokemonDataType"
import PokemonInfo from "../types/PokemonInfoType"
import SpeciesDataType from "../types/SpeciesDataType"
import DefaultPokemonData from "../utility/defaults/DefaultPokemon"
import DefaultSpeciesData from "../utility/defaults/DefaultSpeciesData"
import { fetchGetRequest } from "./api"

export const getPokemonByName = async (name:string):Promise<PokemonData> => {
    try {  
        const response = await fetchGetRequest(`${config.POKEMON_ENDPOINT}/${name}`)
        return response as PokemonData
    } catch (e: unknown) {
        logError(e)
        observer.emit(config.EVENT_NAMES.SHOW_ERROR, "Fetching pokemon is failed")
        return DefaultPokemonData()
    }
}

export const getSpeciesByName = async (name:string):Promise<SpeciesDataType> => {
    try {  
        const response = await fetchGetRequest(`${config.SPECIES_ENDPOINT}/${name}`)
        return response as SpeciesDataType
    } catch (e: unknown) {
        logError(e)
        observer.emit(config.EVENT_NAMES.SHOW_ERROR, "Fetching species is failed")
        return DefaultSpeciesData()
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