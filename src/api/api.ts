import axios from "axios";
import config from "../config/config";
import pokemonCache from "../caches/pokemonCache";

const axiosInstance = axios.create({
    baseURL: config.BASE_API_URL,
})

export async function fetchGetRequest(endpoint:string, params?:object):Promise<object>{
    const isCached = await pokemonCache.hasUrl(endpoint)
    if (isCached){
        const response = await pokemonCache.get(endpoint)
        return response
    }
    const response = await axiosInstance.get(endpoint, {params})
    await pokemonCache.add(endpoint, response.data)

    return response.data
}
