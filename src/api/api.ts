import axios from "axios";
import config from "../config/config";
import pokemonCache from "../caches/pokemonCache";

const axiosInstance = axios.create({
    baseURL: config.BASE_API_URL,
})

export async function fetchGetRequest(endpoint:string, params?:object):Promise<object>{
    const cacheKey = endpoint + JSON.stringify(params || {})
    const isCached = await pokemonCache.hasUrl(cacheKey)
    if (isCached){
        console.log("I use cache!")
        const response = await pokemonCache.get(cacheKey)
        return response
    }
    console.log("I dont use cache!")
    const response = await axiosInstance.get(endpoint, {params})
    await pokemonCache.add(cacheKey, response.data)

    return response.data
}
