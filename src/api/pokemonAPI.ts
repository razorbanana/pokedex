import config from "../config/config"
import logError from "../logging/logError"
import observer, { EventNames } from "../observers/observer"
import AbilityDataType from "../types/apiDataTypes/AbilityDataType"
import PokemonData from "../types/apiDataTypes/PokemonDataType"
import PokemonInfo from "../types/apiDataTypes/PokemonInfoType"
import SpeciesDataType from "../types/apiDataTypes/SpeciesDataType"
import DefaultAbilityData from "../utility/defaults/DefaultAbilityData"
import DefaultPokemonData from "../utility/defaults/DefaultPokemonData"
import DefaultSpeciesData from "../utility/defaults/DefaultSpeciesData"
import { fetchGetRequest, fetchGetRequestByUrl } from "./api"

export const getPokemonByName = async (name:string):Promise<PokemonData> => {
    try {  
        const response = await fetchGetRequest(`${config.POKEMON_ENDPOINT}/${name}`)
        return response as PokemonData
    } catch (e: unknown) {
        logError(e)
        observer.emit(EventNames.SHOW_ERROR, "Fetching pokemon is failed")
        return DefaultPokemonData()
    }
}

export const getSpeciesByName = async (name:string):Promise<SpeciesDataType> => {
    try {  
        const response = await fetchGetRequest(`${config.SPECIES_ENDPOINT}/${name}`)
        return response as SpeciesDataType
    } catch (e: unknown) {
        logError(e)
        observer.emit(EventNames.SHOW_ERROR, "Fetching species is failed")
        return DefaultSpeciesData()
    }
}

export const getAbilityByUrl = async (url:string):Promise<AbilityDataType> => {
    try {  
        const response = await fetchGetRequestByUrl(url)
        return response as AbilityDataType
    } catch (e: unknown) {
        logError(e)
        observer.emit(EventNames.SHOW_ERROR, "Fetching ability is failed")
        return DefaultAbilityData()
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
        observer.emit(EventNames.SHOW_ERROR, "Fetching all pokemon names is failed")
        return []
    }
}