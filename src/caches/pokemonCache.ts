import config from "../config/config"
import DefaultResponse from "./DefaultResponse"

interface PokemonCacheInterface {
    add: (url:string, res:Response) => Promise<void>,
    hasUrl: (url: string) => Promise<boolean>,
    get: (url:string) => Promise<Response>
}

async function PokemonCache(cacheName:string):Promise<PokemonCacheInterface>{
    const cache = await caches.open(cacheName)

    async function add(url:string, res:Response):Promise<void>{
        const req = new Request(url)
        await cache.put(req, res)
    }

    async function hasUrl(url: string):Promise<boolean>{
        const keys = await cache.keys()
        const isCached = keys.some(key => key.url === url)
        return isCached
    }

    async function get(url: string): Promise<Response> {
        const response = await cache.match(url); 
        return response ?? DefaultResponse(); 
    }

    return {
        add,
        hasUrl,
        get
    }
}

const pokemonCache = await PokemonCache(config.POKEMON_CACHE_NAME)
export default pokemonCache